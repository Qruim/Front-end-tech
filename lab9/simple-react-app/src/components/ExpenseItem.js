function ExpenseDate(props) {
    return (
        <div className="expense-date">
            <div className="expense-date__month">{props.date.toLocaleString("en-US", { month: "long" })}</div>
            <div className="expense-date__year">{props.date.getFullYear()}</div>
            <div className="expense-date__day">{props.date.getDate()}</div>
        </div>
    );
}

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount.toFixed(2)}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
