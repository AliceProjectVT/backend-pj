class ProductManager {
    
    constructor() {
        this.products = []
    }

    static id = 0

    addProducts(nombre, precio, codigo, imagen, descripcion, stock) {


        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].codigo === codigo) {
                console.log(`El codigo ${codigo} esta repetido`)
                break;
            };
        };
   
       
        const newProduct ={
            nombre, precio, codigo, imagen, descripcion, stock, id: ProductManager.id        
        }
        if(Object.values(newProduct).includes(undefined)){
            console.log ("Debes llenar todos los valores del producto.")
           
        }else{

            ProductManager.id++
            this.products.push({ ...newProduct, id: ProductManager.id })
        
          
        }


    }
    


    getProduct() {
        return this.products;
    }

    inStock(id) {
        return this.products.find((producto) => producto.id === id)



    }

    getProductById(id) {
        this.inStock(id) ? console.log(this.inStock(id)) : console.log("No hay en existencia")

    }
    
  
}




const productos = new ProductManager

console.log(productos.getProduct());

productos.addProducts('Pan', 5, '312312', 'Imagen Pancito', ' este es un pan del mainkra', 20)

productos.addProducts('Zanahoria', 3, '311232312', 'Imagen Zanahoria', 'Encontre una zanahora botada y te la vendo', 1 )

console.log(productos.getProduct());

 productos.addProducts('Botas de cuero', 30, '123321', 'Imagen Botas', 'Botitas lindas uwu', )
 productos.addProducts('Manzana dorada', 5, '123213', 'Imagen GoldApple', 'Manzana hecha de oro', 10)
productos.addProducts('Caña de pescar', 1, '321123', 'Imagen Caña', 'Parece estar encantada', 1)
productos.addProducts('Palito', 5, '213321', 'Imagen Palito', ' Un palito, ta caro.', 20)
