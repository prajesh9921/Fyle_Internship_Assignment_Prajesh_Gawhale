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
  setDataCount,
) => {
  setLoading(true);
  setPageNumber(1);
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
