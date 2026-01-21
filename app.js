"use strict";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.addEventListener("load", () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    try {
      const data = JSON.parse(xhr.responseText);
      if (typeof data === "object") {
        const abilityOne = data.abilities[0];
        const abilityUrl = abilityOne.ability.url;
        const xhrAbility = new XMLHttpRequest();
        xhrAbility.open("GET", abilityUrl);

        xhrAbility.addEventListener("load", () => {
          if (xhrAbility.status >= 200 && xhrAbility.status < 300) {
            try {
              const dataAbility = JSON.parse(xhrAbility.responseText);

              const engEntry = dataAbility.effect_entries.find(
                (entry) => entry.language.name === "en",
              );

              console.log(engEntry.effect);
            } catch (error) {
              console.error("Ошибка парсинга ability:", error);
            }
          } else {
            console.error("Ошибка запроса ability:", xhrAbility.status);
          }
        });
        xhrAbility.send();
      } else {
        console.error("Структура ответа неверна: ожидался объект");
      }
    } catch (error) {
      console.error(`Ошибка парсинга: ${error}`);
    }
  } else {
    console.error(`${xhr.status}`);
  }
});
xhr.send();
