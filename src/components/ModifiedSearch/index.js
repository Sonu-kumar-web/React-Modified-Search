import React, { useState } from "react";

import "./style.css";
import { people } from "../../shared/constants/CommonDataSet";

const ModifiedSearch = () => {
  const [DataList, setDataList] = useState([...people]);
  const [filterWord, setFilterWord] = useState(null);
  const [filterWordSubstring, setFilterWordSubstring] = useState(null);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setFilterWord(searchWord);

    const newFilterList = people.filter((value) => {
      return value.userName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (filterWord?.length >= 1) {
      let lastSubString = newFilterList[0]?.userName.substring(
        searchWord.length
      );
      let intialSubString = newFilterList[0]?.userName.substring(
        0,
        searchWord.length
      );

      if (
        intialSubString?.toLowerCase() === searchWord?.toLowerCase() &&
        searchWord.length !== 0
      ) {
        setFilterWordSubstring(lastSubString);
      } else {
        setFilterWordSubstring(null);
      }
    } else {
      setFilterWordSubstring(null);
    }
    setDataList(newFilterList);
  };

  return (
    <div className="container">
      <div>
        {/* Input field */}
        <div style={{ display: "flex" }}>
          <input
            type="text"
            id="search-name"
            placeholder="Search People..."
            onChange={handleFilter}
          />
          <div className="label-class">
            <span className="space-class">{filterWord && filterWord}</span>
            <span>{filterWordSubstring && filterWordSubstring}</span>
          </div>
        </div>

        {/* List */}
        {DataList?.map((value) => {
          return <div key={value.id}>{value.userName}</div>;
        })}
      </div>
    </div>
  );
};

export default ModifiedSearch;
