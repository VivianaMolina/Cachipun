//Declara constantes para representar en números las jugadas Piedra, papel y tijera
const JuegaPiedra = 0;
const JuegaPapel = 1;
const JuegaTijera = 2;

//Declara variables para contabilizar jugadas ganadas por usuario y/o máquina
var contadorUsuario = 0;
var contadorMaquina = 0;

//DVariables para identificar usuario y máquina
var usuario = "Usted";
var maquina = "Máquina";

//Solicita la cantidad de juegos que desea jugar
var CantidadJugadas = parseInt(prompt("Indique cuántas veces desea jugar"));

//Valida que el jugador ingrese cantidad de jugadas valida e itera segun jugadas
if (CantidadJugadas > 0) {
    for (i = 1; i <= CantidadJugadas; i++) {
        const JugadaUsuario = parseInt(prompt("Indique 0 piedra / 1 Papel / 2 Tijeras"));
        const JugadaMaquina = Math.floor(Math.random() * 3);
        juegaCachipun(JugadaUsuario, JugadaMaquina);
    }
    if (contadorMaquina < contadorUsuario) {
        alert("Felicitaciones, ha ganado la partida!!!");
    }
    else if (contadorMaquina === contadorUsuario) {
        alert("Se ha producido un empate en esta partida");
    }
    else {
        alert("Lamentablemente, ganó la máquina");
    }
}
else {
    alert("Debe indicar número de jugadas");
}

function juegaCachipun(JugadaPersona, JugadaMaquina) {

    tipoJuego(JugadaPersona, usuario);
    tipoJuego(JugadaMaquina, maquina);

    // Si ambos jugadores eligen la misma opción es un empate
    if (JugadaPersona === JugadaMaquina) {
        alert("Empate");
    }
    //Tijera le gana a papel
    if (JugadaPersona === JuegaTijera && JugadaMaquina === JuegaPapel) {
        alert("Usted le gano a la máquina");
        contadorUsuario++;
    }
    else
        if (JugadaMaquina === JuegaTijera && JugadaPersona === JuegaPapel) {
            alert("La máquina le gano a usted");
            contadorMaquina++;
        }
    // Papel le gana a piedra
    if (JugadaPersona === JuegaPapel && JugadaMaquina === JuegaPiedra) {
        alert("Usted le ganó a la máquina");
        contadorUsuario++;
    }
    else
        if (JugadaMaquina === JuegaPapel && JugadaPersona === JuegaPiedra) {
            alert("La máquina le ganó a usted");
            contadorMaquina++;
        }
    // Piedra le gana a tijera
    if (JugadaPersona === JuegaPiedra && JugadaMaquina === JuegaTijera) {
        alert("Usted le gano a la máquina");
        contadorUsuario++;
    }
    else
        if (JugadaMaquina === JuegaPiedra && JugadaPersona === JuegaTijera) {
            alert("La máquina le ganó a usted");
            contadorMaquina++;
        }
    return;
}

//Valida e informa al jugador la jugada realizada por el y la máquina
function tipoJuego(jugada, jugador) {
    switch (jugada) {
        case 0:
            alert(`${jugador} Juega Piedra`);
            break;
        case 1:
            alert(`${jugador} Juega Papel`);
            break;
        case 2:
            alert(`${jugador} Juega Tijera`);
            break
        default:
            alert("El número ingresado no es Piedra, Papel o Tijera");
            break;
    }
    return;

}

