export default function fetchdData(address) {
  const data = fetch(address).then(res => res.json())
  return data
}

export function createAdress(searchTerm) {
  return `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
}

export function createAdressWithId(id) {
  return `https://rickandmortyapi.com/api/character/${id}`
}
