import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Card from "./Card";
import "./expense-list.css";

export default function ExpenseList() {
  const { expensesList: list, query } = useSelector((state) => state.expenses);

  const filteredList = list.filter((item) => item.title.includes(query));

  const notifySucces = () => toast.success("Expense Deleted!");

  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />

      {filteredList.length > 0 ? (
        filteredList .map((item) => {
          return <Card item={item} notifySucces={notifySucces} />;
        })
      ) : (
        <div className="empty-state">
          <img
            src={require("../../assets/images/empty.png").default}
            alt="Empty expense list"
            className="empty-image"
          />
          <label>Your expense list is empty.</label>
        </div>
      )}
    </div>
  );
}
