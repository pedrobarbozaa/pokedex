export const fetchPoke = async (pokemon) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
  const data = await result.json();
  const result2 = await fetch(data.species.url);
  const data2 = await result2.json();
  data.description = data2.flavor_text_entries[0].flavor_text;
  return data
}

