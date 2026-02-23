const numeros = [];

for (let i = 0; i < 5; i++) {
  const num = Number(prompt("Ingresa el número " + (i + 1) + ":"));
  numeros.push(num);
}

function mayorYSuma(numerosArray) {
  const suma = numerosArray.reduce((acumulador, numero) => acumulador + numero, 0);
  const mayor = Math.max(...numerosArray);

  alert("La suma es: " + suma);
  alert("El número más grande es: " + mayor);
}

mayorYSuma(numeros);