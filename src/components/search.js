import React from "react";
import Dropdown from "react-dropdown";
import "../App.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SearchApi, CountApi } from "../API/searchApi";
import {
  onPress,
  handelNext,
  handelPrev,
  handel,
} from "../onPressFunctions/searchPage_handel.js";
import { InfinitySpin, ColorRing } from "react-loader-spinner";
import { getCard } from "./resultCard";


const Search = () => {

  const [selected, setSelected] = React.useState("Title");
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [dataCount, setDataCount] = React.useState(10);
  const [pageNumber, setPageNumber] = React.useState(1);

  const limit = 10;

  const MenuItems = [
    { value: "1", label: "Title" },
    { value: "2", label: "Author" },
  ];

  React.useEffect(() => {
    async function getdata() {
      console.log("Use Effect Called");
      setLoading(true);
      const res_title = await fetch(
        `https://openlibrary.org/search.json?title=star+wars&page=1&limit=${limit}`
      );
      const json_t = await res_title.json();
      const response_t = await json_t.docs;
      setResult(response_t);
      setLoading(false);
    }
    getdata();
  }, []);

  const cards = getCard(result);

  return (
    <div className="search-container">
      <h4 className="search-heading">Search by title or author</h4>
      <div className="search-box">
        <div className="drop-down">
          <Dropdown
            className="search-dropdown"
            options={MenuItems}
            value={selected}
            placeholder="Search by"
            menuClassName="myMenuClassName"
            onChange={(val) => setSelected(val.label)}
          />
          <div className="drop-down-arrow">
            <RiArrowDropDownLine className="drop-down-icon" />
          </div>
        </div>
        <input
          className="search-input"
          type="text"
          name="search"
          value={input}
          placeholder="Search by title or author, ex: star wars"
          onChange={(event) => handel(event, setInput)}
        />
        <button
          className="search-button"
          onClick={() =>
            onPress(
              setLoading,
              setPageNumber,
              SearchApi,
              setResult,
              input,
              selected,
              result,
              CountApi,
              dataCount,
              setDataCount
            )
          }
        >
          SEARCH
        </button>
      </div>
      {loading ? (
        <div className="loader">
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      ) : (
        <div>
          <h2>Showing results for : {input || "star wars"}</h2>
          {cards}
        </div>
      )}
      <div className="buttons">
        <button
          className="previous-button"
          onClick={() =>
            handelPrev(
              pageNumber,
              setLoading,
              setPageNumber,
              SearchApi,
              input,
              selected,
              setResult
            )
          }
        >
          Previous
        </button>
        <button className="preview-button">{pageNumber}</button>
        <button className="preview-button">...</button>
        <button className="preview-button">
          {!dataCount ? (
            <ColorRing height="20" width="20" wrapperClass="dataCount-loader" />
          ) : (
            dataCount / limit
          )}
        </button>
        <button
          className="next-button"
          onClick={() =>
            handelNext(
              pageNumber,
              dataCount,
              limit,
              setLoading,
              setPageNumber,
              SearchApi,
              input,
              selected,
              setResult
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Search;
