const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const products = [
    {
        id: 1,
        name: "Botas de cuero",
        img: "img-botas",
        descripcion: "botitas lindas",
        price: "15"
    },
    {
        id: 2,
        name: "Pan",
        img: "img-pan",
        descripcion: "Pan de trigo",
        price: "2"
    },
    {
        id: 3,
        name: "Caña de pescar",
        img: "img-cañapesca",
        descripcion: "Para tu granja de pescaditos",
        price: "20"
    },
    {
        id: 4,
        name: "Manzana Dorada",
        img: "img-goldapple",
        descripcion: "Manzana hecha de oro",
        price: "80"
    },
    {
        id: 5,
        name: "Palito",
        img: "img-palito",
        descripcion: "Muy util, pero ¿Para que?",
        price: "1"
    },
    {
        id: 6,
        name: "Zanahoria",
        img: "img-zanahoria",
        descripcion: "Puede ser para un curioso transporte",
        price: "2"
    }
]

app.get("/products", (req, res) => {
    const limit = parseInt(req.query.limit) || products.length;
    const limitedProducts = products.slice(0, limit);
    res.json(limitedProducts);
});


app.get("/products/:idProduct", (req, res) => {
    const { idProduct } = req.params;
    const productById = products.find(ele => ele.id === parseInt(idProduct));
    productById ? res.json(productById) : res.send("No existen productos con el id " + idProduct)
});

app.use("*", (req, res) => {
    res.send("pagina no encontrada")
})

app.listen(port, () => console.log("Server start on port " + port));