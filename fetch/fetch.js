async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json();
  return data;
}

fetchData(`https://api.themoviedb.org/3/movie/550?api_key=4e81a8e43b469ae9ace346dce389beba`)
  .then(data => console.log(data))  