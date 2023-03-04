export const onPress = async (
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
) => {
  setLoading(true);
  setPageNumber(1);
  setDataCount();
  const data = await SearchApi(1, input, selected);
  console.log("this is data", data);
  setResult(data);
  setLoading(false);
  console.log("this is result", result);
  const data_C = await CountApi(input, selected);
  console.log("Data Count is", data_C);
  console.log("on press data count", dataCount);
  setDataCount(data_C);
};

export const handelNext = async (pageNumber, dataCount, limit, setLoading, setPageNumber, SearchApi, input, selected, setResult) => {
  if (pageNumber < Math.ceil(dataCount / limit)) {
    setLoading(true);
    setPageNumber(pageNumber + 1);
    const nextData = await SearchApi(pageNumber + 1, input, selected);
    setResult(nextData);
    setLoading(false);
  }
};

export const handelPrev = async (pageNumber, setLoading, setPageNumber, SearchApi, input, selected, setResult) => {
  if (pageNumber > 1) {
    setLoading(true);
    setPageNumber(pageNumber - 1);
    const prevData = await SearchApi(pageNumber - 1, input, selected);
    setResult(prevData);
    setLoading(false);
  }
};

export const handel = (event, setInput) => {
  event.preventDefault();
  const { value } = event.target;
  setInput(value);
};
