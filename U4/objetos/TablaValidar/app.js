"use strict"


class empleado {
    #dni;
    #nombre;
    #apellidos;
    #nacimiento;
    #sueldo;
    constructor(dni, nombre, apellidos, nacimiento, sueldo) {
        this.#dni = dni;
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#nacimiento = nacimiento;
        this.#sueldo = sueldo;
    }
    get dni(){
        return this.#dni;
    }
    get nombre() {
        return this.#nombre;
    }

    get apellidos() {
        return this.#apellidos;
    }

    get nacimiento() {
        return this.#nacimiento;
    }

    get sueldo() {
        return this.#sueldo;
    }

    // toString(){
    //     return `<tr>
    //             <td>${this.#nombre}</td>
    //             <td> ${this.#apellidos}</td>
    //             <td> ${this.#nacimiento}</td>
    //             <td> ${this.#sueldo}</td>
    //             </tr>`;
    // }

    render(){
        //creamos un elemento para cada una de las cosas q necesitamos
        let fila = document.createElement("tr");
        let dni = document.createElement("td");
        let nombre = document.createElement("td");
        let apellido = document.createElement("td");
        let nacimiento = document.createElement("td");
        let sueldo = document.createElement("td");
        //definimos el contenido de cada elemento
        dni.textContent=this.#dni;
        nombre.textContent= this.#nombre;
        apellido.textContent=this.#apellidos;
        nacimiento.textContent=this.#nacimiento;
        sueldo.textContent=this.#sueldo;
        //lo metemos en el tr que en este caso está con la variable fila
        //AppenChild mete a los hijos de fila, que es un tr, dentro de fila,
        //en concreto la variable que pasamos
        fila.appendChild(dni);
        fila.appendChild(nombre);
        fila.appendChild(apellido);
        fila.appendChild(nacimiento);
        fila.appendChild(sueldo);

        return fila;

    }
}

let empleados = [
    new empleado("21345647T","Paco","Fiestas","10/12/1997",27000),
    new empleado("57438563Y","Chindas","Vinto","12/11/2001",33000),
    new empleado("48672513H","Juan","Cruz","23/08/2005",38000),
    new empleado("47507847G","Paco","Merte","30/05/1990",50000),
    new empleado("95748312N","Sabrina","Carpenter","10/01/2000",100000),
    new empleado("73474532K","Eulerio","Rodolfo","06/04/1925",12000),
    new empleado("57309562S","Ana","de Alba","17/10/1986",42000)
]

let tabla = document.getElementById("lista-empleados")
empleados.forEach((empleado) =>{
    tabla.appendChild(empleado.render());
});

let boton = document.getElementById("formulario-enviar");
boton.addEventListener('click', evento => {
    evento.preventDefault();

    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let sueldo = document.getElementById("sueldo").value;

    let Empleado = new empleado(dni, nombre, apellido, nacimiento, sueldo);
    empleados.push(Empleado);

    let tabla = document.getElementById("lista-empleados");
    let fila = Empleado.render();
    tabla.appendChild(fila);

});

const CASILLAS_VALIDAS = ['DNI','Nombre', 'Apellidos', 'Año Nacimiento', 'Sueldo'];

function principal() {
    for(let i = 1; i <= 5; i++) {
        let casilla = document.getElementById(`casilla-${i}`);
        casilla.addEventListener('click', OrdenarOnClick);

        let email = document.getElementById("email");
        email.addEventListener('blur', validacionEmail);

        let dni = document.getElementById("dni");
        dni.addEventListener('blur',validacionDNI);

        let fecha = document.getElementById("nacimiento");
        fecha.addEventListener('blur',validacionFecha);
    }

}
function OrdenarOnClick(event) {
    let casilla = event.target;

    if(comprobarCasillaValida(casilla)) {
    let columna = casilla.textContent;
    //el indexOf lo que hace es
    let indice = CASILLAS_VALIDAS.indexOf(columna);

        empleados.sort((a,b) =>{
        switch(indice){
            case 0: //nombre
            return a.nombre.localeCompare(b.nombre);
            case 1: // Apellidos
                return a.apellidos.localeCompare(b.apellidos);
            case 2: // Año Nacimiento
                return a.nacimiento - b.nacimiento;
            case 3: // Sueldo
                return a.sueldo - b.sueldo;
            default:
                return 0;
        }
    });
        let tabla = document.getElementById("lista-empleados");
        tabla.innerHTML='';
        empleados.forEach((empleado) =>{
        tabla.appendChild(empleado.render());
        });
    }
}

function comprobarCasillaValida(casilla) {
    let contenido = casilla.textContent;
    return CASILLAS_VALIDAS.includes(contenido);
}

function validarEmail(email) {
    const validacion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return validacion.test(email);
}

function validacionEmail(event) {
    let email = event.target.value;
    let valido = validarEmail(email);
    let mensaje = document.getElementById("mensaje-email");
    if (!valido) {
        mensaje.textContent = "El email no es válido";
    }else{
        mensaje.textContent = "";
    }
}

function comprobarLetra(dni) {
    let letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    let dniNumeros="";
    let dniLetra=dni[dni.length-1];

    for (let i=0; i<dni.length-1;i++){
        dniNumeros+=dni[i]; 
    }
    let  letra=dniNumeros%23;
    if (letras[letra]==dniLetra){
        return true;
    }
    else{
        return false;
    }
}
function validarDNI(dni) {
    const validacion = /^\d{8}[A-Z]$/;
    if (comprobarLetra(dni)==true&&validacion.test(dni)==true) {
        return true;
    }else{
        return false;
    }
    
}

function validacionDNI(event){
    let dni = event.target.value;
    let valido = validarDNI(dni);
    let mensaje = document.getElementById("mensaje-dni");
    if (!valido) {
        mensaje.textContent = "El dni no es válido";
    }else{
        mensaje.textContent = "";
    }
}

function validarFecha(fecha) {
    const validacion = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(10|11|12|13|14|15|16|17|18|19|20)\d\d$/;
    return validacion.test(fecha);
}

function validacionFecha(event){
    let fecha = event.target.value;
    let valido = validarFecha(fecha);
    let mensaje = document.getElementById("mensaje-fecha");
    if (!valido) {
        mensaje.textContent = "El formato de fecha no es válido, tiene que ser: DD/MM/YYYY";
    }else{
        mensaje.textContent = "";
    }
}



principal();

