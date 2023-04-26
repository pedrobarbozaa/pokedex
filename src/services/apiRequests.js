export const fetchPoke = async (pokemon) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
  const data = await result.json();
  return data;
}

