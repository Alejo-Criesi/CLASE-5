//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let items = document.querySelectorAll("li");

let array = [];

for (let index = 0; index < items.length; index++) {
  let numeroLi = items[index].innerHTML;
  let cambiaANumber = Number(numeroLi);
  array.push(cambiaANumber);
}

document.querySelector("#boton-promedio").onclick = function () {
  let numeros = 0;

  if (items.length === array.length) {
    for (let index = 0; index < array.length; index++) {
      numeros = numeros + array[index];

      if (index < array.length) {
        let em = document.querySelector("#el-promedio");
        let resultado = numeros / array.length;
        em.innerHTML = resultado;
      }
    }
  }

  return false;
};

document.querySelector("#boton-numero-grande").onclick = function () {
  let numeros = array[0];

  for (let index = 0; index < array.length; index++) {
    if (numeros <= array[index]) {
      numeros = array[index];
    }
    if (index < array.length) {
      let em = document.querySelector("#el-numero-grande");
      em.innerHTML = numeros;
    }
  }
  return false;
};
};
