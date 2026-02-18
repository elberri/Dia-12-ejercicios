let totalCompra = Number(prompt("Ingrese el precio total de su compra"));
let tarjeta = prompt("¿Tiene tarjeta de cliente frecuente? (si / no)");
tarjeta = tarjeta.trim().toLowerCase();
let mensaje = "";
let totalFinal = totalCompra;
if (totalCompra > 500) {
  totalFinal = totalFinal * 0.9;
  mensaje = "Se aplicó un 10% de descuento por compra mayor a $500";
  if (tarjeta === "si") {
    totalFinal = totalFinal * 0.95;
    mensaje = mensaje + " + 5% adicional por tarjeta";
  }
} else if (totalCompra <= 100) {
  totalFinal = totalFinal * 1.05;
  mensaje = "Se aplicó un recargo del 5% por compra menor o igual a $100";
} else {
  mensaje = "No se aplicaron descuentos ni recargos";
}
console.log("Precio final: $" + totalFinal);
console.log(mensaje);
