class ProductManager {
    constructor() {
        this.products = []


    }

    static id = 0

    addProduct(nombre, descripcion, precio, imagen, id, stock) {
        ProductManager.id++
        this.products.push({ nombre, descripcion, precio, imagen, id, stock, id: ProductManager.id })


    }



    getProduct() {
        return this.products;
    }


    getProductById(id) {
        if (!this.products.find((producto) => producto.id === id)) {
            console.log("No está")
        } else {
            console.log("Está")
        }
    }
}
const productos = new ProductManager

productos.addProduct('Pan', 'Pan de aldeanos de Minecraft', 1000, 'img', 10)
productos.addProduct('Papas', 'Papas cultivadas con odio', 200, 'img', 5)
productos.addProduct('TNT', 'TNT Marca ACME', 8000, 'img', 1)
productos.addProduct('Fertilizante', 'Potente fertilizante de dudosa procedencia', 1000, 'img', 10)


console.log(productos.getProduct())

productos.getProductById(10)
