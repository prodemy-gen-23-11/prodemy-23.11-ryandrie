let shoes = [
    {
        name: "Skechers Microspec Plus Girl's Shoes - Black",
        price: 459000,
        imageUrl: [
            "https://down-id.img.susercontent.com/file/sg-11134201-7rblb-llx17pgbesb4b8",
            "https://down-id.img.susercontent.com/file/sg-11134201-7rbn7-llx17pon2lvv82",
            "https://down-id.img.susercontent.com/file/sg-11134201-7rbms-llx17pymnzjd15",
            "https://down-id.img.susercontent.com/file/sg-11134201-7rbnd-llx17q7set5v62",
        ],
        stock: 10,
        sold: 9,
        category: "Footwear",
        brand: "Skechers",
        id: 1,
    },
    {
        id: 2,
        name: "Skechers Graceful Women's Sneaker - Black",
        price: 599000,
        imageUrl: [
            "https://down-id.img.susercontent.com/file/sg-11134201-7r98o-lkuugh96hf3682",
            "https://down-id.img.susercontent.com/file/sg-11134201-7rbk0-lkuughhi58w846",
            "https://down-id.img.susercontent.com/file/sg-11134201-7rbk0-lkuughq3snfm63",
            "https://down-id.img.susercontent.com/file/sg-11134201-7rbk0-lkuughxvha4t47",
        ],
        stock: 12,
        sold: 5,
        category: "Footwear",
        brand: "Skechers",
    },
    {
        name: "Skechers Go Walk Joy Women's Sneaker - Black",
        price: 699000,
        imageUrl: [
            "https://down-id.img.susercontent.com/file/sg-11134201-7rbmw-llnfbbkfipin11",
            "https://down-id.img.susercontent.com/file/sg-11134201-7r9br-llnfbbtl5ber93",
            "https://down-id.img.susercontent.com/file/sg-11134201-7rblx-llnfbc26spwdc3",
            "https://down-id.img.susercontent.com/file/sg-11134201-7rbn2-llnfbcb2fqlwc0",
        ],
        stock: 8,
        sold: 12,
        category: "Footwear",
        brand: "Skechers",
        id: 3,
    },
];

const newProduct = {
    id: 4,
    name: "Skechers Street Uno Lite Girl's Grade School Sneakers Shoes - BLACK/ROSE",
    price: 599000,
    imageUrl: [
        "https://down-id.img.susercontent.com/file/sg-11134201-7rbkp-lqk4f4s3qy2v4b",
        "https://down-id.img.susercontent.com/file/sg-11134201-7rblt-lqk4f56991rube",
        "https://down-id.img.susercontent.com/file/sg-11134201-7rbl3-lqk4f5gir7us45",
        "https://down-id.img.susercontent.com/file/sg-11134201-7rbmx-lqk4f61bwrj41b",
    ],
    stock: 12,
    sold: 2,
    category: "Footwear",
    brand: "Skechers",
};

// console.log(shoes);

function addProduct(product) {
    shoes.push(product);
    console.log(shoes);
}

addProduct(newProduct);

function editProductById(id, key, value) {
    let product = shoes.find((item) => item.id === id);
    if (product && product[key] !== undefined) {
        product[key] = value;
        console.log(shoes);
    } else {
        console.log(
            "Cannot find ID or Property of an object with that value(s)"
        );
    }
}

editProductById(4, "name", "Skechers Street Uno Lite Girl's - Black");

function deleteProductById(id) {
    shoes = shoes.filter((item) => item.id !== id);
    console.log(shoes);
}

deleteProductById(4);
