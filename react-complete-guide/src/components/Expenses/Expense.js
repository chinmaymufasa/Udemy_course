//Expense.js file
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expense = (props) => {
  const [filteredYear, setFilteredDate] = useState("2020");

  const changeDate = (selectedYear) => {
    setFilteredDate(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onDateChange={changeDate} />

        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
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
