import SubjectCard from "../components/subjectCard";

export const Javascript = async (
  setLoading,
  setSubject,
  GetSubjects,
  setResult
) => {
  setLoading(true);
  setSubject("javascript");
  const res = await GetSubjects("javascript");
  setResult(res);
  setLoading(false);
};

export const Machine = async (
  setLoading,
  setSubject,
  GetSubjects,
  setResult
) => {
  setLoading(true);
  setSubject("machine");
  const res = await GetSubjects("machine");
  setResult(res);
  setLoading(false);
};

export const India = async (setLoading, setSubject, GetSubjects, setResult) => {
  setLoading(true);
  setSubject("india");
  const res = await GetSubjects("india");
  setResult(res);
  setLoading(false);
};

export const CryptoCurrency = async (
  setLoading,
  setSubject,
  GetSubjects,
  setResult
) => {
  setLoading(true);
  setSubject("crypto_currency");
  const res = await GetSubjects("crypto currency");
  setResult(res);
  setLoading(false);
};

export const BlockChain = async (
  setLoading,
  setSubject,
  GetSubjects,
  setResult
) => {
  setLoading(true);
  setSubject("blockchain");
  const res = await GetSubjects("blockchain");
  setResult(res);
  setLoading(false);
};

export const Search = async (setInput, GetSubjects, setSearchResult, input) => {
  setInput("Loading...");
  const res = await GetSubjects(input, 50);
  setSearchResult(res);

  if (!res || !res.length) {
    setInput("no results found");
  } else {
    setInput("");
  }
};

export const SearchCard = (searchResult) => {
  return searchResult?.map((item, index) => {
    try {
      if (!item || !index) {
        return null;
      }
      return <SubjectCard key={index} title={item.title} />;
    } catch (err) {
      console.log("error in map", err, item);
    }
  });
};

export const SubjectLists = (result) => {
  return result?.map((item, index) => {
    return <SubjectCard key={index} title={item.title} />;
  });
};
