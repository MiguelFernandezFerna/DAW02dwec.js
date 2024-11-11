"use strict";

let empleados = [
    {nombre: "Sandra", apellidos: "López", nacimiento: 1989, sueldo: 55000},
    {nombre: "Juan", apellidos: "Targaryen", nacimiento: 1200, sueldo: 88000},
    {nombre: "Luisa", apellidos: "Bolson", nacimiento: 2432, sueldo: 99999},
];

//filtrar por sueldo mayor que 40000

let sueldoMayor = empleados.filter(empleado =>{
    return (empleado.sueldo>40000);
});

//ordenados por año de nacimiento
let empleadosPorOrdenDeNacimiento = empleados.sort((a,b)=>{
    return (a.nacimiento - b.nacimiento);
})



