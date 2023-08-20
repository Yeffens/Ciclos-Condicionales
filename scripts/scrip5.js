let N = parseInt(prompt("Ingrese Un Numero De Estudiantes"))
let Acum = 0
let Cont = 0

for (let i = 1; i <= N; i++) {
    let Edad = parseInt(prompt("Ingrese Su Edad" ))
    Acum = Acum + Edad
    Cont = Cont + 1
    promedio = Acum + Cont/ Edad
}if (Edad >= 21 && Edad >= 21){
    console.log("El Promedio De Edad Mayores De 21 Es:")
}else if (Edad <= 20 && Edad <= 20){
    console.log("El Promedio Del Los Menores De 21 Es:")

}
