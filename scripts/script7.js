let CanastaFamiliar = 5

for (let i = 1; i <=5 ; i++) {
    let Producto = prompt("Ingrese Productos A Llevar: " + i)
    let Precio= parseInt(prompt(" Ingrese Precio Del Producto: " + i))
    
    let Compra = (Precio * Producto)
    let Descuento = (Compra * 0.19)
    let Total = (Compra - Descuento)
    
    console.log(" La Compra: " + Compra)
    console.log(" El Precio Total Es:" + Total)
    console.log(" El Descuento Es:" + Descuento)



    }
