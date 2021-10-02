import React from "react";
import AddForm from "../../components/add-form/AddForm";
import TopFold from "../../components/topfold/TopFold";
import "./add-expense.css";

export default function AddExpense() {
  return (
    <div className="add-expense">
      <TopFold />
      <AddForm />
    </div>
  );
}
