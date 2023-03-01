function mostrar() {
  document.getElementById('obj2').style.display = 'block';
  document.getElementById('obj1').style.display = 'none';
}

function ocultar() {
  document.getElementById('obj1').style.display = 'block';
  document.getElementById('obj2').style.display = 'none';
}

// function myFunction() {
//   const nuevoUsuario = document.getElementById("obj2");

//   if (nuevoUsuario.style.display === "none") {
//     nuevoUsuario.style.display = "block";
//   } else {
//     nuevoUsuario.style.display = "none";
//   }
// }

// function oculto_muestra(id){
//   if (document.getElementById){ //se obtiene el id
//   var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
//   el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
//   }
//   }
//   window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
//   oculto_muestra('obj2');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
//   }

//   function muestra_oculta(id){
//     if (document.getElementById){ //se obtiene el id
//     var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
//     el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
//     }
//     }
//     window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
//     muestra_oculta('obj1');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
//     }

// const btn = document.getElementById('btn')
// const div = document.getElementById('campo1')

// let mostrarDiv = true;

// btn.addEventListener('click', e => {
//   if(mostrarDiv){
//     mostrarDiv = false
//     e.target.textContent = 'Mostrar'
//     div.classList.add('ocultar')
//   }else{
//     mostrarDiv = true
//     e.target.textContent = 'Ocultar'
//     div.classList.remove('ocultar')
//   }
 
// });

// function myFunction() {
//   const nuevoUsuario = document.getElementById("obj2");

//   if (nuevoUsuario.style.display === "none") {
//     nuevoUsuario.style.display = "block";
//   } else {
//     nuevoUsuario.style.display = "none";
//   }
// }