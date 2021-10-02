import React from "react";
import ExpenseList from "../../components/expense-list/ExpenseList";
import TopFold from "../../components/topfold/TopFold";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <TopFold />
      <ExpenseList />
    </div>
  );
}
