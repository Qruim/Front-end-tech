import React, { useState } from "react";

function ExpenseFilter(props) {
    const expenses = props.expenses;
    const yearList = [];
    expenses.filter((e) => {
        if (yearList.includes(e.date.getFullYear())) {
            return;
        }
        yearList.push(e.date.getFullYear());
    });
    const [selectedYear, setSelectedYear] = useState("");

    const yearChangeHandler = (event) => {
        setSelectedYear(event.target.value);
        props.onFilterChange(event.target.value);
    };

    return (
        <div className="expenses-filter_wrapper">
            <label>Filter by Year</label>
            <select value={selectedYear} onChange={yearChangeHandler}>
                <option value="" key={0}>
                    Select Year
                </option>
                {yearList.map((year, index) => (
                    <option value={year} key={index + 1}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ExpenseFilter;
