"use strict";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

function checkResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return response.json();
}

fetch(url)
  .then(checkResponse)
  .then((pokemonData) => {
    if (!pokemonData.abilities || pokemonData.abilities.length === 0) {
      throw new Error("У покемона нет способностей");
    }
    const abilityUrl = pokemonData.abilities[0].ability.url;
    return fetch(abilityUrl);
  })
  .then(checkResponse)
  .then((abilityData) => {
    const engEntry = abilityData.effect_entries.find(
      (entry) => entry.language.name === "en",
    );
    if (!engEntry) {
      throw new Error("Описание способности на английском не найдено");
    }
    console.log(engEntry.effect);
  })
  .catch((error) => {
    console.error(`Произошла ошибка: ${error.message}`);
  });
