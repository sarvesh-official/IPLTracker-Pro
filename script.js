async function getMatchData() {
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=50a2823e-8ba1-4037-a247-f9d739406d6c&offset=0"
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.status != "success") return;

      const matchesList = data.data;

      if (!matchesList) return [];

      const relevantData = matchesList.map(
        (match) => `${match.name}, ${match.status}`
      );
      console.log({ relevantData });
      document.getElementById("matches").innerHTML = relevantData
        .map((match) => `<li>${match}</li>`)
        .join("");

      return relevantData;
    })
    .catch((e) => console.log(e));
}

getMatchData();
