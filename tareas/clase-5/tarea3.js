//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector("button").onclick = function () {
  let cantidadDeHoras = [];
  let cantidadDeMinutos = [];
  let cantidadDeSegundos = [];
  let inputHoras = document.querySelectorAll("#horas");
  let inputMinutos = document.querySelectorAll("#minutos");
  let inputSegundos = document.querySelectorAll("#segundos");

  let contadorDeSegundos = 0;
  for (let index = 0; index < inputSegundos.length; index++) {
    contadorDeSegundos = Number(inputSegundos[index].value);
    cantidadDeSegundos.push(contadorDeSegundos);
  }
  let segundos = 0;
  for (let index = 0; index < cantidadDeSegundos.length; index++) {
    segundos = segundos + cantidadDeSegundos[index];
  }
  console.log(segundos);

  resultadoSegundos = segundos;

  while (segundos > 60) {
    segundos = segundos - 60;
  }

  segundosPush = resultadoSegundos - segundos;
  segundosPush = segundosPush / 60;
  cantidadDeMinutos.push(segundosPush);

  let contadorDeMinutos = 0;
  for (let index = 0; index < inputMinutos.length; index++) {
    contadorDeMinutos = Number(inputMinutos[index].value);
    cantidadDeMinutos.push(contadorDeMinutos);
  }

  let minutos = 0;
  for (let index = 0; index < cantidadDeMinutos.length; index++) {
    minutos = minutos + cantidadDeMinutos[index];
  }

  resultadoMinutos = minutos;

  while (minutos > 60) {
    minutos = minutos - 60;
  }

  minutosPush = resultadoMinutos - minutos;
  minutosPush = minutosPush / 60;
  cantidadDeHoras.push(minutosPush);

  let contadorDeHoras = 0;
  for (let index = 0; index < inputHoras.length; index++) {
    contadorDeHoras = Number(inputHoras[index].value);
    cantidadDeHoras.push(contadorDeHoras);
  }

  let horas = 0;
  for (let index = 0; index < cantidadDeHoras.length; index++) {
    horas = horas + cantidadDeHoras[index];
  }

  let strong = document.querySelector("strong");
  strong.innerHTML =
    "el tiempo total es de " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos";
};
