let partidoHamburguesa = [];
let partidoSol = [];
let partidoTierra = [];
let opcion;
do {
  opcion = prompt(
    "SIMULADOR DE ELECCIONES\n\n" +
    "1. Ingresar voto" +
    "2. Finalizar votación"
  );
  if (opcion === "1") {
    let nombre = prompt("Ingrese nombre del votante:");
    let voto = prompt(
      "Seleccione partido:" +
      "1. Partido Hamburguesa" +
      "2. Partido Sol" +
      "3. Partido Tierra"
    );
    if (voto === "1") {
      partidoHamburguesa.push(nombre);
    } else if (voto === "2") {
      partidoSol.push(nombre);
    } else if (voto === "3") {
      partidoTierra.push(nombre);
    } else {
      alert("Opción de partido inválida");
    }
  }

} while (opcion !== "2");

// RESULTADOS
let votosHamburguesa = partidoHamburguesa.length;
let votosSol = partidoSol.length;
let votosTierra = partidoTierra.length;
let ganador = "";

if (votosHamburguesa > votosSol && votosHamburguesa > votosTierra) {
  ganador = "Partido Hamburguesa";
} else if (votosSol > votosHamburguesa && votosSol > votosTierra) {
  ganador = "Partido Sol";
} else if (votosTierra > votosHamburguesa && votosTierra > votosSol) {
  ganador = "Partido Tierra";
} else {
  ganador = "Empate";
}
alert(
  "RESULTADOS\n\n" +
  "P. Hamburguesa: " + votosHamburguesa + " votos\n" +
  "P. Sol: " + votosSol + " votos\n" +
  "P. Tierra: " + votosTierra + " votos\n\n" +
  "Ganador: " + ganador
);

console.log("Votantes Hamburgues:", partidoHamburguesa);
console.log("Votantes Sol:", partidoSol);
console.log("Votantes Tierra:", partidoTierra);
