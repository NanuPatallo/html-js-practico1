function aleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra 🥌"
    } else if (jugada == 2) {
        resultado = "Papel 📋"
    } else if (jugada == 3) {
        resultado = "Tijera ✂"
    } else {
        resultado = "opciòn invàlida"
    }

    return resultado
}

let jugador = 0
let pc = 0
let triunfos = 0
let perdidos = 0

while (triunfos < 3 && perdidos < 3) {
    pc = aleatorio(1, 3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel o 3 para tijera")

    alert("Tu eliges: " + eleccion(jugador))
    alert("PC elije: " + eleccion(pc))

    if (pc == jugador) {
        alert("EMPATE")
    } else if (jugador == 1 && pc == 3) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else {
        alert("PERDISTE")
        perdidos = perdidos + 1
    }
}
alert("Ganaste " + triunfos + " veces." + " Perdiste " + perdidos + " veces.")