
function huevos(A){
    i=[0.3, 0.5, 0.8, 0.10 ]
    const precioUNITARIO = 250
    const totalHUEVOS = precioUNITARIO * A
}
if ( A > 1 && A < 100 ){
    console.log("Valor De Huevos A Llevar Es De: " + totalHUEVOS)
    console.log("Con Un Descuento Del 3 % : " + totalHUEVOS * i[0])
    console.log("El Valor A Pagar Es: " + totalHUEVOS -  totalHUEVOS * i[0])

}else if( A > 101 && A < 200) {
    console.log("Valor De Huevos A Llevar Es De: " + totalHUEVOS)
    console.log("Con Un Descuento Del 5 % : " + totalHUEVOS * i[1])
    console.log("El Valor A Pagar Es: " + totalHUEVOS -  totalHUEVOS * i[1])

}else if(A > 201 && A < 300) {
    console.log("Valor De Huevos A Llevar Es De: " + totalHUEVOS)
    console.log("Con Un Descuento Del 8 % : " + totalHUEVOS * i[2])
    console.log("El Valor A Pagar Es: " + totalHUEVOS -  totalHUEVOS * i[2])

}else{
    console.log("Valor De Huevos A Llevar Es De: " + totalHUEVOS)
    console.log("Con Un Descuento Del 10 % : " + totalHUEVOS * i[3])
    console.log("El Valor A Pagar Es: " + totalHUEVOS -  totalHUEVOS * i[3])
 }  
