import React, { useEffect } from "react";

const ExpensesChart = ({ expenses }) => {
    // Ensure there are always 12 months
    const fillMissingMonths = () => {
        const filledExpenses = [];
        const currentMonth = new Date().getMonth(); // Get current month index (0-11)
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        for (let i = 0; i < 12; i++) {
            const monthIndex = (currentMonth + 12 - i) % 12; // Get index for past 12 months
            const monthName = months[monthIndex];
            const expense = expenses.find((expense) => expense.date.getMonth() === monthIndex);
            filledExpenses.unshift({ month: monthIndex, name: monthName, amount: expense ? expense.amount : 0 });
        }

        return filledExpenses;
    };

    const filledExpenses = fillMissingMonths();
    const maxExpense = filledExpenses.reduce((max, expense) => Math.max(max, expense.amount), 0);

    return (
        <div className="expenses-chart">
            <div className="expenses-column-list">
                {filledExpenses.map((expense, index) => (
                    <div className="expense-column" key={index}>
                        <div className="expense-content_wrapper">
                            <div
                                className="expense-content"
                                style={{
                                    height: `${(expense.amount / maxExpense) * 100}%`,
                                }}
                            ></div>
                        </div>
                        <span>{expense.name.slice(0, 3)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpensesChart;
