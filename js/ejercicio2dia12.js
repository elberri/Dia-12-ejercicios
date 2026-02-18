let precio = 100;
let edad = Number(prompt("Ingrese su Edad"));
let estudiante = prompt("¿Es Estudiante? (si/no)");
let distancia = parseInt(prompt("¿Que distancia recorrera?"));
estudiante = estudiante.trim().toLowerCase();
let factor = 1;
if (edad < 18) {
  factor = 0.5;
} else if (edad > 60) {
  factor = 0.4;
} else if (estudiante === "si") {
  factor = 0.75;
}
let total = precioBase * factor;
if (distancia > 30) {
  total = total * 1.1;
}
console.log("El costo final del viaje es: $" + total);
