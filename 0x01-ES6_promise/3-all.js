// File: 3-all.js

const { uploadPhoto, createUser } = require("./utils"); // Use require() instead of import

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

module.exports = handleProfileSignup; // Export the function using module.exports

