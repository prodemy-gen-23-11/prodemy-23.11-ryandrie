const axios = require("axios");

// Make a request for a user with a given ID
axios
    .get("https://dummyjson.com/products?limit=10")
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
