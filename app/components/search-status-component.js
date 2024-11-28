"use client";
import React from "react";
import { useState } from "react";
import { positionList } from "../../data/search-status-list";


// This is the search status components for index page
const SearchStatus = () => {

  // This line initialises the state which is set to "".The index = The current state value. setIndex = a function to update that state.
  const [index, setIndex] = useState("");

  // This calls setIndex to updates the index state.
  function handleChange(e) {
    setIndex(e.target.value);
  }

  return (
    <select
      id="search_status"
      name="search_status"
      data-placeholder="Stay..."
      onChange={handleChange}
      value={index}
      style={{
        width: "190px",
        height: "40px",
        padding: "8px",
        borderRadius: "3px",
        border: "none",
        paddingTop: "15px",
      }}
    >
      <option value="">Search...</option>
      {positionList.map((position) => (
        <option key={position.id} value={position.value}>
          {position.value} {position.id === 1 ? "night" : "nights"}
        </option>
      ))}
    </select>
  );
};

export default SearchStatus;
