export default function fetchData(query) {
  const data = fetch(
    `https://rickandmortyapi.com/api/character/?name=${query}`
  ).then(res => res.json())
  return data
}
