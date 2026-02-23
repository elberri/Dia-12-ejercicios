function calcularAreaTriangulo(base, altura) {
  return base * altura;
}

let veces = 1;

while (veces <= 3) {
  const base = Number(prompt("Ingrese la base del triangulo " + veces));
  const altura = Number(prompt("Ingrese altura del triangulo " + veces));

  if (base <= 0 || altura <= 0) {
    alert("Ingrese una base o altura mayores a 0");
    continue;
  }

  const resultado = calcularAreaTriangulo(base, altura);
  alert("Su area del triangulo " + veces + " es: " + resultado);
  veces++;
}