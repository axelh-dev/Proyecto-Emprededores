// // Captura el formulario
// var form = document.getElementById("myForm");

// // Agrega un evento de escucha para el envío del formulario
// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // Evita el envío del formulario por defecto

//   // Captura los valores de los campos del formulario
//   let nombre = document.getElementById("nombre").value;
//   let apellido = document.getElementById("apellido").value;
//   let gmail = document.getElementById("correo").value;
//   let numtelefono = document.getElementById("telefono").value;
//   let fechaNac = document.getElementById("fec-nac").value;

//   var fechaActual = new Date();
//   var fechaPedido = fechaActual.toLocaleDateString();

//   let tipoPlan_a = document.getElementById("plan_solo").value;
//   let tipoPlan_b = document.getElementById("plan_parejas").value;
//   let tipoPlan_c = document.getElementById("mas_personas").value;

//   /* Pendiente generar codigo QR */
//   let numPedido = 123;

//   // Crea un objeto de datos con los valores capturados
//   const data = {
//     nombre: nombre,
//     apellido: apellido,
//     gmail: gmail,
//     numtelefono: numtelefono,
//     fechaNac: fechaNac,
//     fechaPedido: fechaPedido,
//     tipoPlan_a: tipoPlan_a,
//     tipoPlan_b: tipoPlan_b,
//     tipoPlan_c: tipoPlan_c,
//     numPedido: numPedido,
//   };

//   // Realiza una solicitud HTTP POST a la API utilizando Fetch API o XMLHttpRequest

//   fetch("http://localhost:8080/api/bicitech", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//     body: JSON.stringify(data),
//     mode: "no-cors",
//   })
//     .then(function (response) {
//       console.log("Solicitud enviada correctamente");
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml2');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml2 .letter',
//     scale: [4,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70*i
//   }).add({
//     targets: '.ml2',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml7 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml7 .letter",
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml7",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
