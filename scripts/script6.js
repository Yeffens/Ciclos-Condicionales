
let Mayores = 0
let Menores = 0
for (let i = 1; i <=5 ; i++) {
    let edad = parseInt(prompt(" Ingrese su edad " + (i)))
    if (edad >= 18) {
       Mayores = Mayores + 1
    console.log(" Los Mayores De Edad Son  " + Mayores)
    } else {
        Menores = Menores + 1
        console.log(" Los Menores De Edad Son  " + Menores)
    }
}
