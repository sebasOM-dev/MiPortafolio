// // const canvas = document.getElementById("loader");
// // const ctx = canvas.getContext("2d");
// let btnsOpciones = document.getElementsByName("pregunta");

// let angle = 0;
// let hue = 0;

// console.log(btnsOpciones);

// btnsOpciones.forEach(btn => {
//     btn.addEventListener("click", () => {

//         console.log("Clic en botón de opción");

//         const canvas = document.getElementById("loader");
//         const ctx = canvas.getContext("2d");

//         function draw() {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             const x = canvas.width / 2;
//             const y = canvas.height / 2;
//             const radius = 15;
//             const lineWidth = 3;

//             // Fondo tenue del círculo
//             ctx.beginPath();
//             ctx.arc(x, y, radius, 0, Math.PI * 2);
//             ctx.strokeStyle = "rgba(255,255,255,0.1)";
//             ctx.lineWidth = lineWidth;
//             ctx.stroke();

//             // Parte animada
//             ctx.beginPath();
//             ctx.arc(x, y, radius, angle, angle + Math.PI * 1.3);
//             ctx.strokeStyle = `rgb(255,255,255)`;
//             ctx.lineWidth = lineWidth;
//             ctx.lineCap = "round";
//             ctx.stroke();

//             // Actualiza ángulo y color
//             angle += 0.1;
//             hue = (hue + 2) % 360;

//             requestAnimationFrame(draw);
//         }

//         const textElement = document.getElementById("loadingText");
//         const word = "Cargando";
//         const letters = word.split("");

//         // Crear los spans por letra
//         letters.forEach(letter => {
//         const span = document.createElement("span");
//         span.textContent = letter;
//         textElement.appendChild(span);
//         });

//         const spans = textElement.querySelectorAll("span");
//         let index = 0;

//         function waveEffect() {
//         // resetear colores
//         spans.forEach(span => (span.classList.remove("gray")));
//         // aplicar gris a la letra actual
//         spans[index].classList.add("gray");

//         // avanzar al siguiente índice
//         index = (index + 1) % spans.length;
//         }

//         setInterval(waveEffect, 150); // cada 100ms cambia la letra
//         draw();
//     });
// });    

// //iniciar el efecto
// // setInterval(waveEffect, 150); // cada 150ms cambia la letra
// // draw();


// //añadimos los eventos necesarios


