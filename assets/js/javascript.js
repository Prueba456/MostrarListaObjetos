var arrayFicha = [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
{ nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
{ nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
{ nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
{ nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];

var imprimirTodo1 =document.getElementById('imprimirTodo');
var imprimir=document.getElementById('imprimir');

var allFicha = "";
  arrayFicha.forEach(function(e){
    allFicha +=  "<ul><li>Nombre: "+ e.nombre + "<br>" +
                       "<li>Apellido: "+ e.apellido + "<br>" +
                       "<li>Rol: "+ e.rol + "<br>" +
                       "<li>Cumpleaños: "+ e.cumpleanios + "<br></ul>";

  })
  imprimir.innerHTML = allFicha;
