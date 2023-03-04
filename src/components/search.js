import React, { useRef } from "react";
import Dropdown from "react-dropdown";
import "../App.css";
import ResultCard from "./resultCard";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SearchApi, CountApi } from "../API/searchApi";
import { onPress } from "../onPressFunctions/handel.js";
import { InfinitySpin } from "react-loader-spinner";

const Search = () => {
  const [selected, setSelected] = React.useState("Title");
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [dataCount, setDataCount] = React.useState();
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
      console.log("Result is: ", result);
      setLoading(false);

      // Api to get the count of API.
      // console.log("counting api invoked");
      // const res_count = await fetch(
      //   `https://openlibrary.org/search.json?title=star+wars`
      // );
      // const json_c = await res_count.json();
      // const response_c = await json_c.docs;
      // setDataCount(response_c.length);
      // console.log(dataCount);
    }
    getdata();
  }, []);

  const handel = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setInput(value);
  };

  const handelNext = async () => {
    console.log("---------------------------------------");
    console.log("page number before start:" + pageNumber);
    console.log("Total pages", Math.ceil(dataCount / limit));

    if (pageNumber < Math.ceil(dataCount / limit)) {
      console.log("Next Button Invoked");

      setLoading(true);
      setPageNumber(pageNumber + 1);
      console.log(pageNumber);
      const nextData = await SearchApi(pageNumber + 1, input, selected);
      setResult(nextData);
      console.log("nextData:", nextData);
      setLoading(false);
    }
  };

  const handelPrev = async () => {
    console.log("--------------------------------------");
    console.log("page number before start:" + pageNumber);

    if (pageNumber > 1) {
      console.log("Previous button invoked");

      setLoading(true);
      setPageNumber(pageNumber - 1);
      console.log(pageNumber);
      const prevData = await SearchApi(pageNumber - 1, input, selected);
      setResult(prevData);
      console.log("prevData:", prevData);
      setLoading(false);
    }
  };


  const getCard = () => {
    if (!result || !result.length) {
      return <p>result not found</p>;
    }
    return result?.map((info, index) => {
      try {
        if (!info || !index) {
          return null;
        }
        return (
          <ResultCard
            key={index}
            title={info?.title || ""}
            author={info?.author_name[0] || ""}
            first_publish_year={info?.first_publish_year || ""}
            latest_year={info?.publish_year[0] || ""}
          />
        );
      } catch (err) {
        console.log("error in map", err, info);
      }
    });
  };

  const cards = getCard();

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
          onChange={handel}
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
          onClick={handelPrev}
        >
          Previous
        </button>
        <button className="preview-button">{pageNumber}</button>
        <button className="preview-button">...</button>
        <button className="preview-button">{dataCount/limit}</button>
        <button className="next-button" onClick={handelNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Search;
