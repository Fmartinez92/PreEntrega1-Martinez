
// Nombre de los productos y su precio
const productos = [
    {nombre: "Lego Batman", precio: 500},
    {nombre: "Batimovil", precio: 10000},
    {nombre: "Lego Batman Original", precio: 5000},
];
let carrito=[]

//mensaje de bienvenida, primer prompt y while
let seleccion = prompt ("Bati-bienvenido a nuestra bati-tienda, ¿desea mejorar su bati-vida?")

while(seleccion != "si" && seleccion !="no"){
    alert("por favor, bati-ingresa si o no")
    
}
if(seleccion == "si"){
    alert("Bienvenido a la Baticueva, estos son nuestros bati-productos a la bati-venta")
    let batiProductos = productos.map (
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert (batiProductos.join (" - "))
} else if (seleccion == "no") {
    alert("Que tenga una buena Bati-vida en el asilo Arkahm")
};

//Selección de productos para el carrito usando while & if

while(seleccion !="no"){
    let producto = prompt("Agrega un bati-producto a tu bati-carrito")
    let precio = 0

    if(producto == "Lego Batman"  || producto == "Batimovil"  ||  producto == "Lego Batman Original") {
        switch(producto) {
            case "Lego Batman":
                precio = 500;
                break;
            case "Batimovil":
                precio = 10000;
                break;
            case "Lego Batman Original":
                precio= 5000;
                break;
            default:
                break;
        
         }

    // selección de unidades 
    let unidades = parseInt(prompt("¿cuantas bati-unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)

    } else {
        alert ("no tenemos ese bati-producto")
    }

    seleccion = prompt ("¿desea seguir bati-comprando?")

    while(seleccion == "no"){
        alert ("Agradecemos su bati-compra")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break
    }
}

//ver total del carrito y compra realizada

const total = carrito.reduce ((ecc,el) => acc +el.precio * el.unidades, 0)
console.log(`el total a pagar es: ${total}`);
