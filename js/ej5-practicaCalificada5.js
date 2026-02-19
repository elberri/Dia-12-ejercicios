let anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
let anioActual = parseInt(prompt("Ingrese el año actual:"));
let cumplio = prompt("¿Ya cumplió años este año? (si/no)").toLowerCase();
let edad = anioActual - anioNacimiento;
if (cumplio === "no") {
  edad = edad - 1;
}
if (edad < 18) {
  console.log("Edad:", edad, "- Menor de edad");
} else if (edad <= 30) {
  console.log("Edad:", edad, "- Adulto joven");
} else if (edad <= 59) {
  console.log("Edad:", edad, "- Adulto");
} else {
  console.log("Edad:", edad, "- Adulto mayor");
}
