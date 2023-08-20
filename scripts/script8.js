let N = parseInt(prompt("Ingrese Un Numero De Personas"))
let tHijos = 0
let nHijos= 0
let promedio = 0
let shijos = 0
let hijos = 0

for (let i = 1; i <= N; i++) {
    let hijos = Boolean(prompt(" Tiene Hijos " + (i)))
    if (hijos == true) {
        tHijos = tHijos + 1
    } else {
        nHijos = nHijos + 1
        
    }
}while (hijos <= N){
        let hijos = parseInt(prompt("Ingrese La Cantidad De Hijos" ))
        if (hijos >= 1) {
            hijos = hijos + 1
        } else {
            hijos = hijos + 1
        }
        promedio = tHijos + hijos / N
        shijos = shijos + hijos 
        
        console.log(" El Numero De Hijos: " + hijos)
        console.log(" El Promedio De Hijos: " + promedio)
        console.log(" El Numero De Hijos Del Grupo Es:" + shijos)
        console.log(" Las Personas Que Tienen Hijos " + tHijos)
        console.log(" Las Personas Que No Tienen Hijos " + nHijos)


    }
