const axios = require("axios");

// axios
//     .get("https://dummyjson.com/recipes?limit=10")
//     .then(function (response) {
//         console.log(response.data.recipes);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

axios({
    method: "get",
    url: "https://dummyjson.com/recipes",
    params: {
        limit: 10,
    },
}).then((response) => {
    console.log(response.data.recipes);
});
