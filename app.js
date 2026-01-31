"use strict";

function getGeolocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation не поддерживается"));
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      resolve({
        latitude: position.latitude,
        longitude: position.longitude,
      });
      (error) => {
        reject(error);
      };
    });
  });
}

getGeolocation()
  .then((coords) => {
    console.log(coords.latitude, coords.longitude);
  })
  .catch((err) => {
    console.error(err);
  });
