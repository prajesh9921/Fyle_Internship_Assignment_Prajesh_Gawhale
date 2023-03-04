const GetSubjects = async (topic, limit = 10) => {
  if (topic.length === 0) {
    return;
  }
  try {
    let search_string = topic.split(" ").join("+");
    const resposne = await fetch(
      `https://openlibrary.org/subjects/${search_string}.json?limit=${limit}`
    );
    const json = await resposne.json();
    const subjects = await json.works;
    return subjects;
  } catch (e) {
    console.log(e);
  }
};

export default GetSubjects;
