let inicio = Number(prompt("Ingrese el Numero inicial"));
let fin = Number(prompt("Ingrese el numero final"));
function clasificarParesImpares(inicio, fin) {
  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
      console.log(i + " Es par");
    } else {
      console.log(i + " Es impar");
    }
  }
}
clasificarParesImpares(inicio, fin);