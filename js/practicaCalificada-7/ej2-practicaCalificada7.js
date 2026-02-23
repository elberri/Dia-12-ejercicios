function convertirAFahrenheit(temperatura) {
  return (temperatura * 9) / 5 + 32;
}
let veces = 1;
while (veces <= 5) {
  const temperatura = Number(
    prompt("Ingrese la temperatura N° " + veces + " a convertir"),
  );
  if (temperatura != Number) {
    alert("Ingrese un numero por favor!");
    continue;
  }
  const resultado = convertirAFahrenheit(temperatura);
  alert(
    "su temperatura de " +
      temperatura +
      " °C" +
      " paso a " +
      resultado +
      " ° Fahrenheit",
  );
  veces++;
}
