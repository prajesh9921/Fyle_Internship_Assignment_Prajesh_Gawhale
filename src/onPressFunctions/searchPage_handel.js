export const onPress = async (
  setLoading,
  setPageNumber,
  SearchApi,
  setResult,
  input,
  selected,
  CountApi,
  setDataCount,
  setCountLoading
) => {
  setLoading(true);
  setCountLoading(true);
  setPageNumber(1);
  setDataCount();
  const data = await SearchApi(1, input, selected);
  setResult(data);
  setLoading(false);
  const data_C = await CountApi(input, selected);
  setDataCount(data_C);
  setCountLoading(false);
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
