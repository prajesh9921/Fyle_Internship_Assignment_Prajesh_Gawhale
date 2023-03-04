import React from "react";

const GetSubjects = async(topic, limit=10) => {
    console.log("get subject api called");
    if (topic.length === 0) {
        console.log("no topic");
        return;
    };
    try{
        console.log(topic)
        let search_string = topic.split(' ').join("+");
        const resposne = await fetch(`https://openlibrary.org/subjects/${search_string}.json?limit=${limit}`);
        const json = await resposne.json();
        const subjects = await json.works;
        console.log(subjects);
        return subjects;
    }catch(e){
        console.log(e);    
        };
};

export default GetSubjects;