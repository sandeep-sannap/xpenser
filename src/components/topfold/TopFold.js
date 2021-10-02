import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchQuery } from "../../redux/actions/expenses";
import "./topfold.css";

export default function TopFold() {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchQuery(e.target.value));
  };

  return (
    <div className="topfold">
      {window.location.pathname == "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i className="fi fi-rr-search"></i>
            <input
              value={query}
              placeholder="Search for expenses"
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add-expense">
            <div className="add-button">
              <i class="fi fi-rr-add"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-button">
              <i class="fi fi-rr-angle-left"></i>
              <label>Back</label>
            </div>
          </Link>
          {/* <div className="add-topfold-button">
            <i class="fi fi-rr-cross-circle"></i>
            <label>Cancel</label>
          </div> */}
        </div>
      )}
    </div>
  );
}
