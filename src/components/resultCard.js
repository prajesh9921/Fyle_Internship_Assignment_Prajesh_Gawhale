import React from "react";
import "../App.css";

const ResultCard = (props) => {
  if (!props) {
    return null;
  }
  return (
    <div key={props.index} className="result-card">
      <h4 className="card-book-title">{props.title}</h4>
      <div className="card-book-details">
        <p className="card-book-author">
          Author: <span className="card-book-author-span">{props.author}</span>
        </p>
        <p className="card-book-latest-year">
          Latest Publish Year:{" "}
          <span className="card-book-latest-year-span">
            {props.latest_year}
          </span>
        </p>
        <p className="card-book-first-year">
          First Publish Year:{" "}
          <span className="card-book-first-year-span">
            {props.first_publish_year}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
