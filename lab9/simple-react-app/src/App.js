import React, { useState } from "react";
import "./App.css";
import expensesData from "./mockData/data";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpensesChart from "./components/ExpensesChart";
import ExpenseItem from "./components/ExpenseItem";

function App() {
    const [expenses, setExpenses] = useState(expensesData);
    const [filteredYear, setFilteredYear] = useState("");
    const [showForm, setShowForm] = useState(false);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [...prevExpenses, expense];
        });
        setShowForm(false);
    };

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const toggleFormHandler = () => {
        setShowForm((prevShowForm) => !prevShowForm);
    };

    const filteredExpenses = expenses.filter((expense) => {
        return filteredYear === "" || expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div className="card">
            <div className="form-wrapper">
                {!showForm && <button onClick={toggleFormHandler}>Add New Expense</button>}
                {showForm && <ExpenseForm onSaveExpenseData={addExpenseHandler} onCancel={toggleFormHandler} />}
            </div>
            <div className="body_wrapper">
                <ExpenseFilter onFilterChange={filterChangeHandler} expenses={expenses} />
                <ExpensesChart expenses={filteredExpenses} />
                <div className="expenses-list">
                    {filteredExpenses.map((expense) => {
                        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
