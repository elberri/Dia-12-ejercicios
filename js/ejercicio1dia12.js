let resultado = "";
let repitaNotas = true;
let nota1;
let nota2;
let nota3;
let nota4;

do {
  nota1 = parseInt(prompt(`Ingrese su primera nota del 0 al 100`));
  nota2 = parseInt(prompt(`Ingrese su segunda nota del 0 al 100`));
  nota3 = parseInt(prompt(`Ingrese su tercera nota del 0 al 100`));
  nota4 = parseInt(prompt(`Ingrese su cuarta nota del 0 al 100`));
  if (
    nota1 < 0 ||
    nota1 > 100 ||
    isNaN(nota1) ||
    nota2 < 0 ||
    nota2 > 100 ||
    isNaN(nota2) ||
    nota3 < 0 ||
    nota3 > 100 ||
    isNaN(nota3) ||
    nota4 < 0 ||
    nota4 > 100 ||
    isNaN(nota4)
  ) {
    alert("Ingrese bien las notas");
    repitaNotas = true;
  } else {
    repitaNotas = false;
  }
} while (repitaNotas === true);
let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
if (promedio >= 90) {
  resultado = "Excelente";
} else if (promedio >= 75) {
  resultado = "Bueno";
} else if (promedio >= 60) {
  resultado = "Regular";
} else {
  resultado = "Insuficiente";
}
console.log("Su Resultado es: " + resultado);
