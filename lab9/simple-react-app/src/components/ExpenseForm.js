import React, { useState } from "react";

function ExpenseForm(props) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            id: "e" + new Date().getTime(),
            title: title,
            amount: +amount,
            date: new Date(date),
        };

        props.onSaveExpenseData(expenseData);

        setTitle("");
        setAmount("");
        setDate("");
    };

    return (
        <div className="expenses-addFrom">
            <form onSubmit={submitHandler}>
                <div className="form_fields">
                    <div className="field_wrapper field_title">
                        <label>Title</label>
                        <input type="text" value={title} onChange={titleChangeHandler} />
                    </div>
                    <div className="field_wrapper field_amount">
                        <label>Amount</label>
                        <input type="number" value={amount} onChange={amountChangeHandler} />
                    </div>
                    <div className="field_wrapper field_date">
                        <label>Date</label>
                        <input type="date" value={date} onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className="form_actions">
                    <button onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;
