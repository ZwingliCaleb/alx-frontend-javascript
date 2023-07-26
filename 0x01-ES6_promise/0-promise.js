// 0-promise.js
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Assuming the API call is asynchronous
    setTimeout(() => {
      const responseData = { data: "Some data from the API" };
      // If the API call is successful, resolve the Promise with the data
      resolve(responseData);
      // If the API call fails, reject the Promise with an error
      // reject(new Error("Failed to fetch data from API"));
    }, 2000); // Simulating a 2-second delay for the API call
  });
}

export default getResponseFromAPI;

