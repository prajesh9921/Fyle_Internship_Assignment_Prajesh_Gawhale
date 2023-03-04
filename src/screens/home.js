import React from "react";
import "../App.css";
import Search from "../components/search";
import Subject from "../components/subject";

const HomePage = () => {
    return(
        <div className="home">
            <div className="demotext">Open Library</div>
            <div className="container">
                <Subject/>
                <Search/>
            </div>
        </div>
    );
}

export default HomePage;