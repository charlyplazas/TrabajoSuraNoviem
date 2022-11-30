/////////////////////////se declara la variable para el menu
let etiquetaBoton = document.getElementById("boton");

/////////////////////////se hace la funcion para que todas las operaiones enten en un menu
etiquetaBoton.addEventListener("click", function () {
  var respuesta = Number(prompt("1.Ingresar al menú \n2.Cerrar"));
  while (respuesta == 1) {
    var menu = Number();
    var respuestaDos = true;

    do {
      let menu = Number(
        prompt(
          "1. Obtener area\n2. matrices\n3. N/A\n4. N/A \n5. Par casilleros\n6. casillero Pisos\n7. casillero Pisos Impar\n8. N/A\n9.N/A\n10. N/A\n11.comparar Vectores\n12. calculadora\n13. imc\n14.banco\n15.venta Manual\n.16.fahrenheit\n17. Cerrar"
        )
      );
      switch (menu) {
        case 1:
          while (respuesta != 0) {
            obtenerArea();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              obtenerArea();
            } else if (respuestaDos == 2) {
              break;
            }
          }
          break;
        case 2:
          while (respuesta != 0) {
            matrices();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              matrices();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 3:
          while (respuesta != 0) {
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 4:
          while (respuesta != 0) {
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
            } else if (respuestaDos == 2) {
              break;
            }
          }
          break;
        case 5:
          while (respuesta != 0) {
            casilleros();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              casilleros();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 6:
          while (respuesta != 0) {
            casilleroPisos();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              casilleroPisos();
            } else if (respuestaDos == 2) {
              break;
            }
          }
          break;
        case 7:
          while (respuesta != 0) {
            casilleroPisosImpar();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              casilleroPisosImpar();
            } else if (respuestaDos == 2) {
              break;
            }
          }
          break;
        case 8:
          while (respuesta != 0) {
            diasSemanales();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              diasSemanales();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 9:
          while (respuesta != 0) {
            incremenrarDos();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              numerosDe2En2HastaNnumeros();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 10:
          while (respuesta != 0) {
            tecnologias();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              menuTecnologiasDsarrolloSoftware();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 11:
          while (respuesta != 0) {
            compararVectores();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              compararVectores();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 12:
          while (respuesta != 0) {
            calculadora();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              calculadora();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 13:
          while (respuesta != 0) {
            imc();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              imc();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;

        case 14:
          while (respuesta != 0) {
            banco();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              banco();
            } else if (respuestaDos == 2) {
              break;
            }
          }
          break;

        case 15:
          while (respuesta != 0) {
            ventaManual();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              ventaManual();
            } else if (respuestaDos == 2) {
              break;
            }
          }
          break;
        case 16:
          while (respuesta != 0) {
            fahrenheit();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              fahrenheit();
            } else if (respuestaDos == 2) {
              break;
            }
          }
          break;

        case 17:
          respuesta = 2;
          break;

        default:
          respuesta == 2;
          alert("Digitaste mal, vuelve a intentarlo");
          break;
      }
    } while (respuesta == 1);
  }
  if ((respuesta = 2)) {
    alert("chao bebe");
  }
});

/////////////////////////01///////////////////////////
function obtenerArea() {
  let a = parseFloat(prompt("Digita el primer numero: "));
  let b = parseFloat(prompt("Digita el segundo numero: "));
  let c = parseFloat(prompt("Digita el tercer numero: "));

  if (a == b && b == c) {
    alert(
      "si se puede formar un triángulo equilátero con los lados ingresados a b c”"
    );
  } else {
    alert("no se puede formar un triángulo equilátero");
  }
}

/////////////////////////02///////////////////////////
function matrices() {
  let matriz = [
    { 1: 6, 2: 0, 3: 7, 4: 0 },
    { 1: 2, 2: 0, 3: 9, 4: 8 },
    { 1: 0, 2: 1, 3: 0, 4: 0 },
  ];
  let fila = Number(prompt("Selecciona la fila"));
  let columna = Number(prompt("Selecciona la columna"));
  let resultado = matriz[fila][columna];
  document.write(
    `En la Fila ${fila} y en la columna ${columna} se escuentra:${resultado}`
  );
}

/////////////////////////05///////////////////////////
function casilleros() {
  let casillero = [[], [], [], [], [], [], [], [], [], []];
  var opcion = Number(prompt("1.Agregar un objeto 2.Salir"));
  do {
    let casilla = Number(
      prompt(
        "1.Casillero 01\n2.Casillero 02\n3.Casillero 03\n4.Casillero 04\n5.Casillero 05\n6.Casillero 06\n7.Casillero 07\n8.Casillero 08\n9.Casillero 09\n10.Casillero 10\n11.Salir"
      )
    );

    switch (casilla) {
      case 1:
        var objeto = prompt("Qué objeto deseas guardar?");
        casillero[0].push(objeto);
        console.log(casillero[0]);
        console.log(casillero);
        break;
      case 2:
        var objeto = prompt("Qué objeto deseas guardar?");
        casillero[1].push(objeto);
        console.log(casillero[1]);
        console.log(casillero);
        break;
      case 3:
        var objeto = prompt("Qué objeto deseas guardar?");
        casillero[2].push(objeto);
        console.log(casillero[2]);
        console.log(casillero);
        break;
      case 4:
        var objeto = prompt("Qué objeto deseas guardar?");
        casillero[3].push(objeto);
        console.log(casillero[3]);
        console.log(casillero);
        break;
      case 5:
        var objeto = prompt("Qué objeto deseas guardar?");
        casillero[4].push(objeto);
        console.log(casillero[4]);
        console.log(casillero);
        break;
      case 6:
        var objeto = prompt("Qué objeto deseas guardar?");
        casillero[5].push(objeto);
        console.log(casillero[5]);
        console.log(casillero);
        break;
      case 7:
        var objeto = prompt("Qué objeto deseas guardar?");
        casillero[6].push(objeto);
        console.log(casillero[6]);
        console.log(casillero);
        break;
      case 8:
        var objeto = prompt("Qué objeto deseas guardar?");
        casillero[7].push(objeto);
        console.log(casillero[7]);
        console.log(casillero);
        break;
      case 9:
        var objeto = prompt("Qué objeto deseas guardar?");
        casillero[8].push(objeto);
        console.log(casillero[8]);
        console.log(casillero);
        break;
      case 10:
        var objeto = prompt("Qué objeto deseas guardar?");
        casillero[9].push(objeto);
        console.log(casillero[9]);
        console.log(casillero);
        break;
      case 11:
        var opcion = Number(
          prompt(
            "Estás seguro de que deseas salir?\n1.Agregar un objeto 2.Salir"
          )
        );
        break;
      default:
        alert("Este casillero no existe");
        break;
    }
  } while (opcion == 1);
  {
    if (opcion == 2) {
      console.log(casillero);
    }
  }
}

/////////////////////////06///////////////////////////
function casilleroPisos() {
  let casilleros = [
    [["1, "], ["2, "], ["3, "], ["4, "], ["5, "]],
    [["6, "], ["7, "], ["8, "], ["9, "], ["10, "]],
  ];
  var piso = Number(
    prompt(
      "Escoge un piso:\n1.Piso superior(1 al 5)\n2.Piso inferior(6 al 10)\n3.Salir"
    )
  );
  do {
    switch (piso) {
      case 1:
        var casilla = Number(
          prompt(
            "1.Primer casillero\n2.Segundo casillero\n3.Tercer casillero\n4.Cuarto casillero\n5.Quinto casillero\n6.Atras"
          )
        );
        if (casilla == 1) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[0][0].push(objeto);
          console.log(casilleros[0][0]);
          console.log(casilleros);
        } else if (casilla == 2) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[0][1].push(objeto);
          console.log(casilleros[0][1]);
          console.log(casilleros);
        } else if (casilla == 3) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[0][2].push(objeto);
          console.log(casilleros[0][2]);
          console.log(casilleros);
        } else if (casilla == 4) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[0][3].push(objeto);
          console.log(casilleros[0][3]);
          console.log(casilleros);
        } else if (casilla == 5) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[0][4].push(objeto);
          console.log(casilleros[0][4]);
          console.log(casilleros);
        } else if (casilla == 6) {
          piso = Number(
            prompt(
              "Escoge un piso:\n1.Piso superior(1 al 5)\n2.Piso inferior(6 al 10)\n3.Salir"
            )
          );
        }

        break;
      case 2:
        var casillados = Number(
          prompt(
            "1.sexto casillero \n2.Septimo casillero\n3.Octavo casillero\n4.Noveno casillero\n5.Decimo casillero\n6.Atras"
          )
        );
        if (casillados == 1) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[1][0].push(objeto);
          console.log(casilleros[1][0]);
          console.log(casilleros);
        } else if (casillados == 2) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[1][1].push(objeto);
          console.log(casilleros[1][1]);
          console.log(casilleros);
        } else if (casillados == 3) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[1][2].push(objeto);
          console.log(casilleros[1][2]);
          console.log(casilleros);
        } else if (casillados == 4) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[1][3].push(objeto);
          console.log(casilleros[1][3]);
          console.log(casilleros);
        } else if (casillados == 5) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[1][4].push(objeto);
          console.log(casilleros[1][4]);
          console.log(casilleros);
        } else if (casillados == 6) {
          piso = Number(
            prompt(
              "Escoge un piso:\n1.Piso superior(1 al 5)\n2.Piso inferior(6 al 10)\n3.Salir"
            )
          );
        }
        break;
      default:
        alert("Este casillero no existe");
        break;
    }
  } while (piso == 1 || piso == 2);
  {
    if (piso == 3) {
      console.log(casilleros);
      document.write(
        "Casillero uno: " +
          "<br/>" +
          casilleros[0] +
          "<br/>" +
          "Casillero dos: " +
          "<br/>" +
          casilleros[1]
      );
      document.write();
    }
  }
}

/////////////////////////07///////////////////////////
function casilleroPisosImpar() {
  let casilleros = [
    [[""], [""], [""], [""], [""]],
    [[""], [""], [""], [""], [""]],
  ];
  var piso = Number(
    prompt(
      "Escoge un piso:\n1.Piso superior(1,3,5,7,9)\n2.Piso inferior(2,4,6,8,10)\n3.Salir"
    )
  );
  do {
    switch (piso) {
      case 1:
        var casilla = Number(
          prompt(
            "1.Primer casillero\n2.Tercer casillero\n3.Quinto casillero\n4.Septimo casillero\n5.Noveno casilleron\n6.Atras"
          )
        );
        if (casilla == 1) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[0][0].push(objeto);
          console.log(casilleros[0][0]);
          console.log(casilleros);
        } else if (casilla == 2) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[0][1].push(objeto);
          console.log(casilleros[0][1]);
          console.log(casilleros);
        } else if (casilla == 3) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[0][2].push(objeto);
          console.log(casilleros[0][2]);
          console.log(casilleros);
        } else if (casilla == 4) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[0][3].push(objeto);
          console.log(casilleros[0][3]);
          console.log(casilleros);
        } else if (casilla == 5) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[0][4].push(objeto);
          console.log(casilleros[0][4]);
          console.log(casilleros);
        } else if (casilla == 6) {
          piso = Number(
            prompt(
              "Escoge un piso:\n1.Piso superior(1,3,5,7,9)\n2.Piso inferior(2,4,6,8,10)\n3.Salir"
            )
          );
        }

        break;
      case 2:
        var casillados = Number(
          prompt(
            "1.Segundo casillero\n2.Cuarto casillero\n3.Sexto casillero\n4.Octavo casillero\n5.Decimo casillero\n6.Atras"
          )
        );
        if (casillados == 1) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[1][0].push(objeto);
          console.log(casilleros[1][0]);
          console.log(casilleros);
        } else if (casillados == 2) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[1][1].push(objeto);
          console.log(casilleros[1][1]);
          console.log(casilleros);
        } else if (casillados == 3) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[1][2].push(objeto);
          console.log(casilleros[1][2]);
          console.log(casilleros);
        } else if (casillados == 4) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[1][3].push(objeto);
          console.log(casilleros[1][3]);
          console.log(casilleros);
        } else if (casillados == 5) {
          objeto = prompt("Qué objeto deseas guardar?");
          casilleros[1][4].push(objeto);
          console.log(casilleros[1][4]);
          console.log(casilleros);
        } else if (casillados == 6) {
          piso = Number(
            prompt(
              "Escoge un piso:\n1.Piso superior(1,3,5,7,9)\n2.Piso inferior(2,4,6,8,10)\n3.Salir"
            )
          );
        }
        break;
      default:
        alert("Este casillero no existe");
        break;
    }
  } while (piso == 1 || piso == 2);
  {
    if (piso == 3) {
      console.log(casilleros);
      document.write(
        "Casillero uno: " +
          "<br/>" +
          casilleros[0] +
          "<br/>" +
          "Casillero dos: " +
          "<br/>" +
          casilleros[1]
      );
      document.write();
    }
  }
}

/////////////////////////07///////////////////////////
function compararVectores() {
  var arreglo = [
    1, 2, 5, 7, 9, 24, 15, 75, 22, 55, 37, 20, 74, 63, 96, 75, 42, 46, 6, 8,
  ];
  var suma = 0;
  var promedio = 0;
  var maximo = 0;
  for (let i = 1; i < arreglo.length; i++) {
    if (maximo < arreglo[i]) {
      maximo = arreglo[i];
    }
    var posicion = arreglo.indexOf(96);
  }
  for (let j = 0; j < arreglo.length; j++) {
    suma = suma + arreglo[j];
    promedio = suma / 20;
  }
  console.log(suma);
  document.write(
    `El numero mayor es: ${maximo}<br/> El promedio es = ${promedio}<br/> La posicion es:  ${posicion}`
  );
}

/////////////////////////12///////////////////////////
function sumaVectores() {
  var arreglo = [
    1, 2, 5, 7, 9, 27, 15, 73, 29, 55, 37, 20, 74, 63, 96, 75, 42, 46, 6, 8,
  ];
  let suma = 0;
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > arreglo[0] && arreglo[i] < arreglo[9]) {
      suma = suma + arreglo[i];
    }
  }
  document.write(`La suma de los vecores da: ${suma}`);
}

/////////////////////////13///////////////////////////
function imc() {
  let peso = parseInt(prompt("Ingrese su peso: "));
  let altura = parseFloat(prompt("ingrese su altura: "));
  let totalImc = parseInt(peso) / parseFloat(altura * altura);

  if (totalImc < 18.5) {
    alert("Usted esta bajo de peso: " + totalImc.toFixed(1));
  } else {
    if (totalImc >= 18.5 && totalImc <= 24.9) {
      alert("Usted esta saludable: " + totalImc.toFixed(1));
    } else {
      if (totalImc >= 25 && totalImc <= 29.9) {
        alert("Usted esta en sobrepeso: " + totalImc.toFixed(1));
      } else {
        if (totalImc >= 30 && totalImc <= 34.9) {
          alert("Usted esta obeso en nivel uno: " + totalImc.toFixed(1));
        } else {
          if (totalImc >= 35 && totalImc <= 39.9) {
            alert("Usted esta obeso en nivel dos: " + totalImc.toFixed(1));
          } else {
            if (totalImc >= 40.0) {
              alert("Usted esta obeso en nivel tres: " + totalImc.toFixed(1));
            } else {
              if (isNaN("peso") || isNaN("altura")) {
                alert("No ingresó valores");
              }
            }
          }
        }
      }
    }
  }
}

/////////////////////////14///////////////////////////
function banco() {
  let dinero = 2000000;

  let mensaje = parseFloat(prompt(`Cuánto dinero desea retirar?`));

  let retiro = dinero - mensaje;

  if (mensaje > dinero) {
    alert("No tienes suficientes fondos");
  } else if (mensaje <= 0 || mensaje == "") {
    alert("Por favor ingresa un monto a retirar");
  } else {
    document(`Total retirado: ${mensaje} <br/> Dinero en cuenta: ${retiro}`);
  }
}

/////////////////////////15///////////////////////////
function ventaManual() {
  let codigo = prompt("El codigo de su articulo es: ");

  let precioUnitario = prompt("El valor unitario del articulo es: ");

  let cantidadUnidadesVendidas = prompt(
    "La cantidad de unidades vendidas son: "
  );

  let IVA = 19 / 100 - precioUnitario;

  let totalVenta = parseFloat(precioUnitario * cantidadUnidadesVendidas);

  function punto() {
    return document.write(totalVenta.toFixed(3));
  }

  if (parseFloat(precioUnitario) * parseInt(cantidadUnidadesVendidas)) {
    document.write(`El codigo de tu articulo es: ${codigo}<br/>El precio unitario es: ${precioUnitario}\<br/>
    La cantidad de unidades son: ${cantidadUnidadesVendidas}<br/>El descuento del IVA es:${IVA}<br/>Total de venta es: ${totalVenta}`);

    punto();
  } else {
    document.write(`ERROR!!  Proceso Finalizado`);
  }
}

/////////////////////////16///////////////////////////
function fahrenheit() {
  let fahrenheit = parseFloat(prompt("Cúal es su temperatura?"));
  let centigrados = ((fahrenheit - 32) * 5) / 9;
  if (centigrados < 38) {
    alert(`Temperatura: ${centigrados}<br/> No tiene fiebre`);
  } else {
    alert(
      `Temperatura: ${centigrados}  <br/> Tiene fiebre, es recomendable ir a un médico`
    );
  }
}
