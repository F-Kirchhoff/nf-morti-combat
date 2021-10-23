export default function fetchData(query) {
  const data = fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then(res => res.json())
    .then(data => data.results)
  return data
}
