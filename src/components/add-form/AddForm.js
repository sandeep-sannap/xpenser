import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { categories } from "../../data/add-expenses";
import { addExpense } from "../../redux/actions/expenses";
import "./add-form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessModal from "./SuccessModal";

export default function AddForm() {
  const dispatch = useDispatch();
  const cat = categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();

  const [modalOpen, setModalOpen] = useState(false);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(e.target.value);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter valid data!");
      notify();
      return;
    } else {
      const data = {
        title,
        amount,
        category,
        createdAt: new Date(),
      };

      dispatch(addExpense(data));
      setModalOpen(true);
    }
  };

  return (
    <div className="add-form">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <div className="form-item">
        <label>Title</label>
        <input
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => handleAmount(e)}
          className="amount-input"
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <i class="fi fi-rr-angle-small-down"></i>
          </div>

          {categoryOpen && (
            <div className="category-container">
              {cat.map((category) => {
                return (
                  <div
                    className="category-item"
                    style={{ borderRight: `5px solid ${category.color}` }}
                    key={category.id}
                    onClick={() => handleCategory(category)}
                  >
                    <label>{category.title}</label>
                    <img src={category.icon.default} alt={category.title} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i class="fi fi-rr-add"></i>
        </div>
      </div>
    </div>
  );
}
