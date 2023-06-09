export const fetchPoke = async (pokemon) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
  const data = await result.json();
  return data
}

export const fetchDescription = async (id) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
  const descriptionData = await result.json();
  return descriptionData;
}

export const fetchEvolution = async (url) => {
  const result = await fetch(url);
  const evoChain = await result.json();
  return evoChain;
}