"use client";
import React from "react";
import { useState } from "react";
import { bedroomsList } from "../../data/search-bed-list";

console.log("BedroomsList:", bedroomsList);

// This is the search betroom components for index page
const SearchBedroom = () => {
  // This line initialises the state which is set to "".The index = The current state value. setIndex = a function to update that state.
  const [index, setIndex] = useState("");

  // This calls setIndex to updates the index state.
  function handleChange(e) {
    setIndex(e.target.value);
  }

  return (
    <select
      id="search_bedrooms"
      name="search_bedrooms"
      data-placeholder="Bedrooms"
      onChange={handleChange}
      value={index}
      style={{
        width: "190px",
        height: "40px",
        padding: "5px",
        paddingTop: "15px",
        borderRadius: "3px",
        border: "none",
      }}
    >
      <option value="">Bedrooms</option>
      {bedroomsList.map((bedroom) => (
        <option key={bedroom.id} value={bedroom.value}>
          {bedroom.value}
        </option>
      ))}
    </select>
  );
};

export default SearchBedroom;
