// File: 3-all.js

import { uploadPhoto, createUser } from "./utils"; // Assuming the functions are exported from utils.js

function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch((error) => {
      console.log("Signup system offline");
    });
}

export default handleProfileSignup;

