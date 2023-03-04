import React from "react";

const SearchApi = async (Page, input, selected) => {
  let search_string = input.split(" ").join("+");
  const parameter = selected.toLowerCase();

  if (input === "" || selected === null) {
    return;
  } else {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?${parameter}=${search_string}&page=${Page}&limit=10`
      );
      const json = await response.json();
      const booksData = json.docs;
      return booksData;
    } catch (e) {
      console.log(e)
      return null;
    }
  }
};

const CountApi = async (input, selected) => {
  let search_string = input?.split(" ").join("+");
  const parameter = selected.toLowerCase();
  const res_count = await fetch(
    `https://openlibrary.org/search.json?${parameter}=${search_string}`
  );
  const json_c = await res_count?.json();
  const response_c = await json_c?.docs;
  return response_c?.length || 0;
};

export { SearchApi, CountApi };
