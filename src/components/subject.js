import React from "react";
import "../App.css";
import GetSubjects from "../API/subjectApi";
import SubjectCard from "./subjectCard";
import { InfinitySpin } from  'react-loader-spinner';

const Subject = () => {
  const [result, setResult] = React.useState();
  const [searchResult, setSearchResult] = React.useState();
  const [subject, setSubject] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [input, setInput] = React.useState("");

  const Javascript = async () => {
    setLoading(true);
    setSubject("javascript");
    const res = await GetSubjects("javascript");
    console.log(res);
    setResult(res);
    console.log("result is", result);
    setLoading(false);
  };

  const Machine = async () => {
    setLoading(true);
    setSubject("machine");
    const res = await GetSubjects("machine");
    console.log(res);
    setResult(res);
    console.log("result is", result);
    setLoading(false);
  };

  const India = async () => {
    setLoading(true);
    setSubject("india");
    const res = await GetSubjects("india");
    console.log(res);
    setResult(res);
    console.log("result is", result);
    setLoading(false);
  };

  const CryptoCurrency = async () => {
    setLoading(true);
    setSubject("crypto_currency");
    const res = await GetSubjects("crypto currency");
    console.log(res);
    setResult(res);
    console.log("result is", result);
    setLoading(false);
  };

  const BlockChain = async () => {
    setLoading(true);
    setSubject("blockchain");
    const res = await GetSubjects("blockchain");
    console.log(res);
    setResult(res);
    console.log("result is", result);
    setLoading(false);
  };

  const Search = async () => {
    setInput("Loading...");
    const res = await GetSubjects(input, 50);
    console.log(res);
    setSearchResult(res);
    console.log("result is", result);

    if(!res || !res.length) {
      setInput("no results found");
    }else{
      setInput("");
    }
    
  };

  const SubjectsList = result?.map((item, index) => {
    return <SubjectCard key={index} title={item.title} />;
  });

  const SearchCard = () => {
    return searchResult?.map((item, index) => {
      try{
        if (!item || !index){
          return null;
        }
        return <SubjectCard key={index} title={item.title} />;
      }catch(err){
        console.log("error in map", err, item);
      }
    })
  };

  const SearchSubjectList = SearchCard();

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
      <button className="subject-search-button" onClick={Search}>press</button>

      <div className="subject-card-container">{SearchSubjectList}</div>

      <h6 className="subject-subjects" onClick={Javascript}>
        JavaScript
      </h6>
      {subject === "javascript" ? (
        loading ? (
          <div className="loader"><InfinitySpin width='100' color="#4fa94d"/></div>
        ) : (
          SubjectsList
        )
      ) : null}

      <h6 className="subject-subjects" onClick={Machine}>
        Machine
      </h6>
      {subject === "machine" ? (
        loading ? (
          <div className="loader"><InfinitySpin width='100' color="#4fa94d"/></div>
        ) : (
          SubjectsList
        )
      ) : null}

      <h6 className="subject-subjects" onClick={India}>
        India
      </h6>
      {subject === "india" ? (
        loading ? (
          <div className="loader"><InfinitySpin width='100' color="#4fa94d"/></div>
        ) : (
          SubjectsList
        )
      ) : null}

      <h6 className="subject-subjects" onClick={CryptoCurrency}>
        Crypto Currency
      </h6>
      {subject === "crypto_currency" ? (
        loading ? (
          <div className="loader"><InfinitySpin width='100' color="#4fa94d"/></div>
        ) : (
          SubjectsList
        )
      ) : null}

      <h6 className="subject-subjects" onClick={BlockChain}>
        BlockChain
      </h6>
      {subject === "blockchain" ? (
        loading ? (
          <div className="loader"><InfinitySpin width='100' color="#4fa94d"/></div>
        ) : (
          SubjectsList
        )
      ) : null}
    </div>
  );
};

export default Subject;
