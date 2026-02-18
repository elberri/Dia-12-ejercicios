let opcion = Number(prompt(
  "Seleccione una opción:\n" +
  "1. Celsius a Fahrenheit\n" +
  "2. Fahrenheit a Celsius\n" +
  "3. Metros a Kilómetros\n" +
  "4. Kilómetros a Metros"
));
let valor = Number(prompt("Ingrese el valor a convertir"));
let resultado;
switch (opcion) {
  case 1:
    resultado = (valor * 9/5) + 32;
    console.log(valor + "°C equivalen a " + resultado + "°F");
    break;
  case 2:
    resultado = (valor - 32) * 5/9;
    console.log(valor + "°F equivalen a " + resultado + "°C");
    break;
  case 3:
    resultado = valor / 1000;
    console.log(valor + " metros equivalen a " + resultado + " kilómetros");
    break;
  case 4:
    resultado = valor * 1000;
    console.log(valor + " kilómetros equivalen a " + resultado + " metros");
    break;
  default:
    console.log("Opción inválida");
}