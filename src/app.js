/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//funcion para recargar pagina usando boton
const HandleBoton = e => {
  console.log("Me clickeaste");
  location.reload(); //para refrescar pagina
  return;
};

//funcion para recargar pagina cada 10 segundos
setTimeout(function() {
  window.location.reload();
}, 10000);

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //Seleccionamos body y cambiamos color de fondo
  let body = document.querySelector("body");
  console.log(body);
  body.classList.add("bg", "bg-success");

  //CARTA
  let nuevoDiv = document.createElement("DIV"); //createElement es para crear etiquetas html
  let app = document.querySelector("#app"); //Se debe poner #
  nuevoDiv.style.width = "300px";
  nuevoDiv.style.height = "450px";
  nuevoDiv.classList.add(
    "container",
    "bg",
    "bg-light",
    //"w-25",
    //"h-100",
    "mt-5"
  );
  nuevoDiv.innerHTML = `<div class="row symbol heading">Generate a new card</div> <div class="row number">Specify the card width and height</div> <div class="row symbol reverse">Fila 3</div>`; //innerHTML= agrega etiquetas envueltas en texto
  //(comillas invertidas tienen mayor importancia que las dobles)

  app.appendChild(nuevoDiv);
  //TERMINA CARTA

  //MENU
  //container
  let wrap = document.getElementById("wrap");
  wrap.style.background = "orange";
  wrap.style.width = "900px";
  wrap.style.display = "flex";
  wrap.classList.add("container", "mt-5", "p-4");

  //primera columna
  const column1 = document.createElement("div");
  column1.style.width = "50%";
  column1.style.float = "left";
  column1.classList.add("text-center", "h4");

  //contenido de la primera columna
  const content1 = document.createElement("p");
  content1.textContent = "Generate a new card";
  column1.appendChild(content1);

  //segunda columna
  const column2 = document.createElement("div");
  column2.style.width = "50%";
  column2.style.float = "left";
  column2.classList.add("text-center", "h5");

  //contenido de la segunda columna
  const content2 = document.createElement("p");
  content2.textContent = "Specify the card width and height";
  column2.appendChild(content2);
  content2.classList.add("h4", "pb-2");

  //segunda columna se divide en tres columnas:
  //primera columna
  const textCol = document.createElement("div");
  textCol.style.width = "33%";
  textCol.style.float = "left";

  const textW = document.createElement("p");
  textW.textContent = "Width";
  textCol.appendChild(textW);

  const textH = document.createElement("p");
  textH.textContent = "Height";
  textCol.appendChild(textH);

  //segunda columna
  const inputCol = document.createElement("div");
  inputCol.style.width = "33%";
  inputCol.style.float = "left";

  //Inputs para width y height
  //WIDTH
  var inputW = document.createElement("input");
  inputW.type = "number";
  //inputW.className = "css-class-name"; // Asi se puede asignar una clase tambien
  inputW.style.width = "200px";
  inputCol.appendChild(inputW); // put it into the DOM
  //codigo para tomar valor del input y aplicarlo a width (EventListener)
  inputW.addEventListener("input", function() {
    const newWidth = inputW.value + "px";
    nuevoDiv.style.width = newWidth;
  });
  //HIGHT
  var inputH = document.createElement("input");
  inputH.type = "number";
  inputH.style.width = "200px";
  inputH.className = "mt-2";
  inputCol.appendChild(inputH); // put it into the DOM
  //codigo para tomar valor del input y aplicarlo a height
  inputH.addEventListener("input", function() {
    const newHight = inputH.value + "px";
    nuevoDiv.style.height = newHight;
  });

  //tercera columna
  const unitCol = document.createElement("div");
  unitCol.style.width = "33%";
  unitCol.style.float = "left";

  const text3 = document.createElement("p");
  text3.textContent = "px";
  unitCol.appendChild(text3);

  const text4 = document.createElement("p");
  text4.textContent = "px";
  unitCol.appendChild(text4);

  column2.appendChild(textCol);
  column2.appendChild(inputCol);
  column2.appendChild(unitCol);

  wrap.appendChild(column1);
  wrap.appendChild(column2);
  //TERMINA MENU

  //MENSAJE
  let message = document.getElementById("message");
  var newMessage = document.createElement("div");

  const textMessage = document.createElement("p");
  textMessage.textContent = "🕑 A new card is generated every 10 seconds";
  newMessage.appendChild(textMessage);
  textMessage.classList.add("text-center", "h5", "text-white", "mt-4");

  message.appendChild(newMessage);
  //TERMINA MENSAJE

  //Seccion para elegir un numero aleatorio para la carta
  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  console.log(
    "esto deberia dar el tercer elemento que es el numero 3:",
    numeros[2],
    "La longitud del arreglo numeros es: ",
    numeros.length
  );

  let numeroAleatorio = Math.floor(Math.random() * numeros.length);
  //console.log("numeroAleatorio: ", numeroAleatorio);
  //console.log("elemento aleatorio: ", numeros[numeroAleatorio]);

  let fila2 = document.querySelector(".number");
  fila2.innerHTML = `${numeros[numeroAleatorio]}`; //para que se ponia eso de `${}`?????

  //Seccion para elegir la suit de la carta ♦ ♥ ♠ ♣ (creacion de objetos)
  let suit = [
    //document.getElementById("simbolo")(
    { suit: "♥", color: "red" },
    { suit: "♦", color: "red" },
    { suit: "♠", color: "black" },
    { suit: "♣", color: "black" }
    //)
  ];

  let suitAleatoria = Math.floor(Math.random() * suit.length);
  console.log(suit[suitAleatoria]);

  let fila1 = document.querySelector(".heading");
  fila1.innerHTML = `${suit[suitAleatoria]["suit"]}`;

  let fila3 = document.querySelector(".reverse");
  fila3.innerHTML = `${suit[suitAleatoria]["suit"]}`;

  fila1.style.color = suit[suitAleatoria]["color"];
  fila3.style.color = suit[suitAleatoria]["color"];

  fila2.classList.add("justify-content-center");

  //Crear boton
  let boton = document.createElement("button");
  let textBoton = document.createTextNode("New Card");
  boton.appendChild(textBoton);

  boton.addEventListener("click", e => HandleBoton(e));

  column1.appendChild(boton);

  boton.classList.add("btn", "btn-primary");
};
