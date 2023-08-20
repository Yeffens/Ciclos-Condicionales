// Menu Y Mostrar Descuento Que Obtendran
function Menu(){
    console.log("Bienvenido Al Almacen H & M");
    console.log("1- Carro o Moto");
    console.log("2- Bicicleta o Patineta");
    console.log("3- Scoter Electrico");
}
const vEHICULO =
parseInt(prompt("Ingrese El Numero De Producto A Llevar"))

switch(vEHICULO){
    case 1:
        console.log("Tiene Un Descuento Del 15 % ")
        break;
        case 2:
            console.log("Tiene Un Descuento Del 10 % ")
            break;
            case 3:
                console.log("Tiene Un Descuento Del 5 % ")
                break;
                default:
                    alert("El Numero De Producto No Es Valido")
}
function main() {
    Menu();
}

