const axios = require("axios");

// axios
//     .get("https://dummyjson.com/products?limit=10")
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

axios({
    method: "get",
    url: "https://dummyjson.com/products",
    params: {
        limit: 10,
    },
}).then((response) => {
    console.log(response.data);
});
