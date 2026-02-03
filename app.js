"use strict";

function race(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      Promise.resolve(promise).then(resolve).catch(reject);
    }
  });
}

const one = new Promise((resolve) => setTimeout(() => resolve("one"), 300));

const two = new Promise((resolve) => setTimeout(() => resolve("two"), 100));

const three = new Promise((_, reject) =>
  setTimeout(() => reject("error"), 200),
);

race([one, two, three]).then(console.log).catch(console.error);
