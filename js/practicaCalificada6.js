let usuario = "Funval";
let contraseña = "Progra123";
let intentos = 3;
let balance = 1000;
let logeado = false;
function pedirMontoValido(mensaje) {
  let monto = parseFloat(prompt(mensaje));
  if (!Number.isFinite(monto) || monto <= 0) {
    alert("Monto inválido. Ingrese un número mayor a 0.");
    return null;
  }
  return monto;
}
do {
  let invitado = prompt(" Ingrese su usuario: ");
  let contraseñaInvitado = prompt(" Ingrese su contraseña: ");
  if (invitado === usuario && contraseñaInvitado === contraseña) {
    let continueMenu = true;
    logeado = true;
    do {
      let opcionesMenu = prompt(`
                Seleccione una opción:
                1- Retiro
                2- Deposito
                3- Ver Saldo
                4- Salir
                `);
      switch (opcionesMenu) {
        case "1":
          let retiro = pedirMontoValido("Ingrese el monto a retirar:");
          if (retiro === null) break;
          if (retiro <= balance) {
            balance = balance - retiro;
            alert("Retiro Exitoso! Nuevo saldo $" + balance);
          } else {
            alert("No tienes Saldo suficiente para esta operación");
          }
          break;
        case "2":
          let deposito = pedirMontoValido("Ingrese el monto a depositar:");
          if (deposito === null) break;
          balance = balance + deposito;
          alert("Deposito exitoso! Nuevo saldo $" + balance);
          break;
        case "3":
          alert("Tu saldo es: $" + balance);
          break;
        case "4":
          alert("Gracias por usar nuestro servicio");
          continueMenu = false;
          break;

        default:
          alert("Ingrese una opcion valida");
          break;
      }
    } while (continueMenu);
  } else {
    alert("Datos incorrectos, intente nuevamente");
    intentos--;
  }
} while (intentos > 0 && !logeado);
if (intentos === 0) {
  alert("Excedió el número de intentos permitidos. Comuniquese con su banco");
}
