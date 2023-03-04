import React from "react";

const SearchApi = async(Page, input, selected) => {
    // if (input === ""){
    //     console.log("Search is empty");
    //     return;
    // }

    let search_string = input.split(' ').join("+");
    console.log(search_string);
    const parameter = selected.toLowerCase();

    if (input === "" || selected === null){
        console.log("Search by not selected or input is empty");
        return;
    }else {
        try{
            console.log("Search by ", selected);
            console.log("page number ceceived: ", Page);
            console.log("fetching page " + Page + " data");
            const response = await fetch(`https://openlibrary.org/search.json?${parameter}=${search_string}&page=${Page}&limit=10`);
            const json = await response.json();
            const booksData = json.docs;
            // setResult(response_t);
            console.log(booksData);
            return booksData;
        }catch(e){
            console.log(e);
            return null
        }
    };
};



const CountApi = async(input, selected) => {

    let search_string = input?.split(' ').join("+");
    const parameter = selected.toLowerCase();
    console.log("counting api invoked outside of useEffect", parameter, search_string);
    const res_count = await fetch(`https://openlibrary.org/search.json?${parameter}=${search_string}`);
    const json_c = await res_count?.json();
    const response_c = await json_c?.docs;
    console.log("counting response", response_c);
    console.log(input, "results were: " ,response_c.length);
    return response_c?.length || 0;
    
    // setDataCount(response_c.length);
};

export {SearchApi, CountApi};