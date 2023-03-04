import React from "react";
import "../App.css";
import GetSubjects from "../API/subjectApi";
import { InfinitySpin } from "react-loader-spinner";
import {
  Javascript,
  Machine,
  India,
  CryptoCurrency,
  BlockChain,
  Search,
  SearchCard,
  SubjectLists,
} from "../onPressFunctions/subjectPage_handel";

const Subject = () => {
  const [result, setResult] = React.useState();
  const [searchResult, setSearchResult] = React.useState();
  const [subject, setSubject] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [input, setInput] = React.useState("");

  const SubjectsList = SubjectLists(result);
  const SearchSubjectList = SearchCard(searchResult);

  return (
    <div className="subject-container">
      <h4 className="subject-heading">Trending Subjects</h4>
      <input
        className="subject-input"
        type="text"
        name="subject"
        placeholder="Search subjects"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="subject-search-button"
        onClick={() => Search(setInput, GetSubjects, setSearchResult, input)}
      >
        Search
      </button>
      <div className="subject-card-container">{SearchSubjectList}</div>
      <h6
        className="subject-subjects"
        onClick={() =>
          Javascript(setLoading, setSubject, GetSubjects, setResult)
        }
      >
        JavaScript
      </h6>
      {subject === "javascript" ? (
        loading ? (
          <div className="loader">
            <InfinitySpin width="100" color="#4fa94d" />
          </div>
        ) : (
          SubjectsList
        )
      ) : null}
      <h6
        className="subject-subjects"
        onClick={() => Machine(setLoading, setSubject, GetSubjects, setResult)}
      >
        Machine
      </h6>
      {subject === "machine" ? (
        loading ? (
          <div className="loader">
            <InfinitySpin width="100" color="#4fa94d" />
          </div>
        ) : (
          SubjectsList
        )
      ) : null}
      <h6
        className="subject-subjects"
        onClick={() => India(setLoading, setSubject, GetSubjects, setResult)}
      >
        India
      </h6>
      {subject === "india" ? (
        loading ? (
          <div className="loader">
            <InfinitySpin width="100" color="#4fa94d" />
          </div>
        ) : (
          SubjectsList
        )
      ) : null}
      <h6
        className="subject-subjects"
        onClick={() =>
          CryptoCurrency(setLoading, setSubject, GetSubjects, setResult)
        }
      >
        Crypto Currency
      </h6>
      {subject === "crypto_currency" ? (
        loading ? (
          <div className="loader">
            <InfinitySpin width="100" color="#4fa94d" />
          </div>
        ) : (
          SubjectsList
        )
      ) : null}
      <h6
        className="subject-subjects"
        onClick={() =>
          BlockChain(setLoading, setSubject, GetSubjects, setResult)
        }
      >
        BlockChain
      </h6>
      {subject === "blockchain" ? (
        loading ? (
          <div className="loader">
            <InfinitySpin width="100" color="#4fa94d" />
          </div>
        ) : (
          SubjectsList
        )
      ) : null}
    </div>
  );
};

export default Subject;
