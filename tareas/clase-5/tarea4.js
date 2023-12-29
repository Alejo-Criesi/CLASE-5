//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let items = document.querySelectorAll("li");

let listaDeLis = [];

for (let index = 0; index < items.length; index++) {
  let numeroLi = Number(items[index].innerHTML);
  listaDeLis.push(numeroLi);
}

document.querySelector("#boton-promedio").onclick = function () {
  let contador = 0;

  if (items.length === listaDeLis.length) {
    for (let index = 0; index < listaDeLis.length; index++) {
      contador = contador + listaDeLis[index];

      if (index < listaDeLis.length) {
        let numeroPromedio = document.querySelector("#el-promedio");
        let calculo = contador / listaDeLis.length;
        numeroPromedio.innerHTML = calculo;
      }
    }
  }
  return false;
};

document.querySelector("#boton-numero-grande").onclick = function () {
  let contador = listaDeLis[0];

  for (let index = 0; index < listaDeLis.length; index++) {
    if (contador <= listaDeLis[index]) {
      contador = listaDeLis[index];
    }
    if (index < listaDeLis.length) {
      let numeroMasGrande = document.querySelector("#el-numero-grande");
      numeroMasGrande.innerHTML = contador;
    }
  }
  return false;
};

document.querySelector("#numero-que-mas-repite").onclick = function () {
  let contador = {};
  let maximoFrecuencia = 0;
  let numeroMasRepetido;

  for (let index = 0; index < listaDeLis.length; index++) {
    const numero = listaDeLis[index];

    contador[numero] = (contador[numero] || 0) + 1;

    if (contador[numero] > maximoFrecuencia) {
      maximoFrecuencia = contador[numero];
      numeroMasRepetido = numero;
    }

    let masFrecuente = document.querySelector("#el-que-mas-se-repite");
    masFrecuente.innerHTML =
      "el numero que mas se repite es " +
      numeroMasRepetido +
      " que aparece " +
      maximoFrecuencia +
      " veces";
  }

  return false;
};