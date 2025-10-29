let dark_color_primario = "#2a2a2a";
let dark_color_secundario = "#2c2c2c";
let dark_text = "white";

let light_color_primario = "white";
let light_color_secundario = "white";
let light_text = "black";

let t_blanco = "text-light";
let t_negro = "text-dark";

let darkMode = true;
let preguntasAbiertas = false;


let opcionesCerradas = true;

var msg_preguntas;
let preguntas;
let user_respuesta;
let bot_respuesta;
let trigger_preguntas;
const respuestas = ["1","2","3","4","5"];

let tec_front = ["./web/srcs/html.png", "./web/srcs/css.png", "./web/srcs/js.png"];
let tec_back = ["./web/srcs/java.png","./web/srcs/php.png","./web/srcs/csharp.png"];
let tec_dev = ["./web/srcs/aws.png","./web/srcs/docker.png", "./web/srcs/git.png"];

let cargarVariables = () =>{
    msg_preguntas = document.getElementById("preguntas");
    preguntas = document.getElementById("barChat");
    

    preguntas.addEventListener("click",animationPreguntas);
    

    trigger_preguntas = document.getElementsByName("pregunta");

    trigger_preguntas[0].addEventListener("click",addConversacionQuienEres);
    trigger_preguntas[1].addEventListener("click",addConversacionQueSabes);
    trigger_preguntas[2].addEventListener("click",addExperiencia);
    trigger_preguntas[3].addEventListener("click",addConversacionContacto);
}

var addConversacionQuienEres = () =>{

    let chat = document.getElementById("mensajes");

    let respuestaU = '<div class="d-flex justify-content-end"><div class="d-flex flex-column align-items-end"><div class="d-flex justify-content-end gap-4"><span><b>Usuario</b></span><span></span></div><div class="d-flex justify-content-end gap-2"><span class="badge text-bg-primary text-light texto-chat text-end" name="mensaje" style="width: fit-content;">¿Quién eres?</span><i class="bi bi-person-circle text-light"></i></div></div></div>';
    let respuestaB = '<div class="align-self-start margin-msg" id="msg_bot"><div class="d-flex justify-content-start"><div class="d-flex flex-column align-items-start"><div class="d-flex justify-content-start gap-4"><span></span><span><b>Bot</b></span></div><div class="d-flex justify-content-start gap-2"><i class="bi bi-person-circle text-light"></i><span class="badge text-bg-success text-light texto-chat" style="width: fit-content;" name="mensaje"><div class="card mb-3" style="max-width: 400px;"><div class="card-header"><b>Juan Sebastián Osorio</b></div><div class="row g-0"><div class="col-md-4"><img src="./web/srcs/sebasCV.jpg" class="img-fluid rounded-start p-2" alt="Imagen de prueba"></div><div class="col-md-8"><div class="card-body d-flex flex-column align-items-center"><p class="card-text text-center">Desarrollador <strong>full-stack</strong>, enfocado en ser <strong>SecDevOps</strong>, aplicando seguridad en las aplicaciones web, además de haber sido candidato en el <strong>campus de Madrid 42</strong>.</p></div></div></div><div class="card-footer"><div class="d-flex gap-2"><a class="btn btn-outline-success" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=personaldesebas@gmail.com"><i class="bi bi-envelope"></i></a><a href="./web/srcs/SebastíanOsorio.pdf" target="_blank" class="btn btn-outline-danger"><i class="bi bi-file-earmark-pdf-fill"></i></a><a href="https://www.linkedin.com/in/sebastián-osorio-518728266/" target="_blank" class="btn btn-outline-primary"><i class="bi bi-linkedin"></i></a><a href="https://github.com/SebasTechMad" target="_blank" class="btn btn-outline-dark"><i class="bi bi-github"></i></a></div></div></div></span></div></div></div></div>';
    
    chat.innerHTML += respuestaU;
    chat.innerHTML += respuestaB;
    chat.innerHTML += "<br><br>";
}

var addConversacionQueSabes = () =>{
    let chat = document.getElementById("mensajes");

    let respuestaU = '<div class="d-flex justify-content-end"><div class="d-flex flex-column align-items-end"><div class="d-flex justify-content-end gap-4"><span><b>Usuario</b></span><span></span></div><div class="d-flex justify-content-end gap-2"><span class="badge text-bg-primary text-light texto-chat text-end" name="mensaje" style="width: fit-content;">¿Qué sabes hacer?</span><i class="bi bi-person-circle text-light"></i></div></div></div>';
    let respuestaB = '<div class="align-self-start margin-msg" id="msg_bot"><div class="d-flex justify-content-start"><div class="d-flex flex-column align-items-start"><div class="d-flex justify-content-start gap-4"><span></span><span><b>Bot</b></span></div><div class="d-flex justify-content-start gap-2"><i class="bi bi-person-circle text-light"></i><span class="badge text-bg-success text-light texto-chat" style="width: fit-content;" name="mensaje"><div class="card text-center" style="max-width: 400px;"><div class="card-header"><h5 class="mb-0">Tecnologías</h5></div><div class="card-body"><div class="d-flex flex-wrap justify-content-center gap-2"><button class="btn btn-outline-primary" onclick="Frontend()">Frontend</button><button class="btn btn-outline-danger" onclick="Backend()">Backend</button><button class="btn btn-outline-success" onclick="Devops()">CI/CD</button><div class="col-12 d-flex flex-wrap gap-3" name="imagenes"></div></div></div></div></span></div></div></div></div>';
    
    chat.innerHTML += respuestaU;
    chat.innerHTML += respuestaB;
    chat.innerHTML += "<br><br>";
}

var addConversacionContacto = () =>{
    let chat = document.getElementById("mensajes");

    let respuestaU = '<div class="d-flex justify-content-end"><div class="d-flex flex-column align-items-end"><div class="d-flex justify-content-end gap-4"><span><b>Usuario</b></span><span></span></div><div class="d-flex justify-content-end gap-2"><span class="badge text-bg-primary text-light texto-chat text-end" name="mensaje" style="width: fit-content;">¿Cómo contactar contigo?</span><i class="bi bi-person-circle text-light"></i></div></div></div>';
    let respuestaB = '<div class="align-self-start margin-msg" id="msg_bot"><div class="d-flex justify-content-start"><div class="d-flex flex-column align-items-start"><div class="d-flex justify-content-start gap-4"><span></span><span><b>Bot</b></span></div><div class="d-flex justify-content-start gap-2"><i class="bi bi-person-circle text-light"></i><span class="badge text-bg-success text-light texto-chat" style="width: fit-content;" name="mensaje"><div class="card text-center" style="max-width: 400px;"><div class="card-header"><h5 class="mb-0">Contacto</h5></div><div class="card-body"><div class="d-flex gap-2 align-items-center"><p class="card-text"><strong>personaldesebas@gmail.com</strong></p><a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=personaldesebas@gmail.com" class="btn btn-outline-danger"><i class="bi bi-envelope"></i></a></div><br><div class="d-flex gap-2 align-items-center"><p class="card-text"><strong>+645 54 11 71</strong></p><div class="flex-grow-1 d-flex justify-content-end"><a target="_blank" href="https://www.google.es/maps/place/Barajas,+28042+Madrid/@40.4794946,-3.6176467,13z/data=!3m1!4b1!4m6!3m5!1s0xd4231e0cc808cfb:0x498db67d1ab6dcea!8m2!3d40.4653704!4d-3.5951518!16s%2Fm%2F04_0t51?hl=es&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" class="btn btn-outline-primary"><i class="bi bi-geo-fill"></i></a></div></div></div></div></div></span></div></div></div></div>';
    
    chat.innerHTML += respuestaU;
    chat.innerHTML += respuestaB;
    chat.innerHTML += "<br><br>";
}

var addExperiencia = () =>{
    let chat = document.getElementById("mensajes");

    chat.innerHTML = "";

    let respuestaU = '<div class="d-flex justify-content-end"><div class="d-flex flex-column align-items-end"><div class="d-flex justify-content-end gap-4"><span><b>Usuario</b></span><span></span></div><div class="d-flex justify-content-end gap-2"><span class="badge text-bg-primary text-light texto-chat text-end" name="mensaje" style="width: fit-content;">¿Tienes experiencia?</span><i class="bi bi-person-circle text-light"></i></div></div></div>';
    let respuestaB = '<div class="align-self-start margin-msg" id="msg_bot"><div class="d-flex justify-content-start"><div class="d-flex flex-column align-items-start"><div class="d-flex justify-content-start gap-4"><span></span><span><b>Bot</b></span></div><div class="d-flex justify-content-start gap-2"><i class="bi bi-person-circle text-light"></i><span class="badge text-bg-success text-light texto-chat" style="width: fit-content;" name="mensaje"><div id="carouselExample" class="carousel slide" data-bs-ride="pause" style="max-width: 500px;"><div class="carousel-inner"><div class="carousel-item active"><div class="d-flex flex-column"><div style="background-color: white;"><img src="./web/srcs/datasystem.png" class="d-block w-100" style="object-fit: cover;" alt="Imagen 1"></div><div class="p-3" style="margin-top: 2rem;"><h5>Data system</h5><p>Informático encargado en resolución en dispositivos tanto en hardware como en software</p></div></div></div><div class="carousel-item"><div class="d-flex flex-column"><img src="./web/srcs/grupo-tic.jpg" class="d-block w-100" style="object-fit: cover;" alt="Imagen 2"><div class="p-3" style="margin-top: 2rem;"><h5>Grupo TIC revolution</h5><p>Desarrollador web encargado de desarrollo tanto en Frontend como en Backend. Encargado de desarrollo de base de datos, y/o mantenimiento de código</p></div></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span></button></div></span></div></div></div></div>';
    
    chat.innerHTML += respuestaU;
    chat.innerHTML += respuestaB;
    chat.innerHTML += "<br><br>";
}


let Frontend = () =>{
    let imagenes = document.getElementsByName("imagenes");
    
    for (const divImagen of imagenes) {
        divImagen.innerHTML = "";

        for (const foto of tec_front) {
            divImagen.innerHTML += `<img src='${foto}' style='width:50px; height:50px;'>`;    
        }
    }
}

let Backend = () =>{
    let imagenes = document.getElementsByName("imagenes");
    
    for (const divImagen of imagenes) {
        divImagen.innerHTML = "";

        for (const foto of tec_back) {
            divImagen.innerHTML += `<img src='${foto}' style='width:50px; height:50px;'>`;    
        }
    }
}

let Devops = () =>{
    let imagenes = document.getElementsByName("imagenes");
    
    for (const divImagen of imagenes) {
        divImagen.innerHTML = "";

        for (const foto of tec_dev) {
            divImagen.innerHTML += `<img src='${foto}' style='width:50px; height:50px;'>`;    
        }
    }
}




let animationPreguntas = () =>{

    if(preguntasAbiertas == false){
        console.log(msg_preguntas);
        msg_preguntas.classList.add("preguntas-aparecer-animation");
        msg_preguntas.classList.remove("preguntas-desaparecer-animation");
        preguntasAbiertas = true;
    }else{
        console.log(msg_preguntas);
        msg_preguntas.classList.remove("preguntas-aparecer-animation");
        msg_preguntas.classList.add("preguntas-desaparecer-animation");
        preguntasAbiertas = false;
    }




}


let cambioColores = () =>{
    
    let barra_divisora_msg = document.getElementsByTagName("hr");

    if(darkMode == false){
        document.documentElement.style.setProperty("--color-primario",dark_color_primario);
        document.documentElement.style.setProperty("--color-secundario",dark_color_secundario);
        document.documentElement.style.setProperty("--color-texto",dark_text);

        barra_divisora_msg[0].classList.replace("border-dark","border-light");

        cambioColoresIconos(t_blanco);

        darkMode = true;
    }else{
        document.documentElement.style.setProperty("--color-primario",light_color_primario);
        document.documentElement.style.setProperty("--color-secundario",light_color_secundario);
        document.documentElement.style.setProperty("--color-texto",light_text);
        
        barra_divisora_msg[0].classList.replace("border-light","border-dark");

        cambioColoresIconos(t_negro);

        darkMode = false;
    }
}

let abrirOpciones = () =>{
    let btnMenu = document.getElementById("btnMenu");
    let btnOpciones = document.getElementsByName("opciones");
    
    

    if(opcionesCerradas){
        btnMenu.classList.add("button-abrir-animation");
        btnMenu.classList.remove("button-cerrar-animation");

        btnOpciones[0].classList.add("primer-boton-aparecer");
        btnOpciones[0].classList.remove("primer-boton-desaparecer");

        btnOpciones[1].classList.add("segundo-boton-aparecer");
        btnOpciones[1].classList.remove("segundo-boton-desaparecer");


        opcionesCerradas = false;
    }else{
        btnMenu.classList.add("button-cerrar-animation");
        btnMenu.classList.remove("button-abrir-animation");

        btnOpciones[0].classList.add("primer-boton-desaparecer");
        btnOpciones[0].classList.remove("primer-boton-aparecer");
        
        btnOpciones[1].classList.add("segundo-boton-desaparecer");
        btnOpciones[1].classList.remove("segundo-boton-aparecer");

        opcionesCerradas = true;
    }
}

let cambioColoresIconos = (color) =>{
    let current_iconos = document.getElementsByTagName("i");

    for (const icono of current_iconos) {
        if(color == "text-light"){
            icono.classList.replace("text-dark", color);
            

        }else{
            icono.classList.replace("text-light", color);
        }
    }
}


