//Expense.js file
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expense = (props) => {
  const [filterDate, setFilterDate] = useState("2020");

  const changeDate = (selectedYear) => {
    setFilterDate(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterDate} onDateChange={changeDate} />

        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expense;
