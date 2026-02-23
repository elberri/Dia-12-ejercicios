const numeros = [];
let suma = 0;
let mayor = 0;

export function mayorYSuma(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];

    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
}

for (let i = 0; i < 5; i++) {
  let num = Number(prompt("Ingresa el número " + (i + 1) + ":"));
  numeros.push(num);
}

mayorYSuma(numeros);
console.log("La suma es: " + suma);
console.log("El número más grande es: " + mayor);