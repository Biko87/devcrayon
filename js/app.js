document.addEventListener('DOMContentLoaded', function() {
const email = {
  asunto: '',
  nombre: '',
  email: '',
  telefono: '',
  mensaje: ''
}

// Seleccionar los elementos de la interfaz
const inputAsunto = document.querySelector('#asunto');
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const inputTel = document.querySelector('#telefono');
const inputMensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#formulario');
// const btnSubmit = document.querySelector('#formulario button[type="submit"]');
// const btnReset = document.querySelector('#formulario button[type="reset"]');
// const spinner = document.querySelector('#spinner');

// Asignar eventos
inputAsunto.addEventListener('blur', validar);
inputNombre.addEventListener('blur', validar);
inputEmail.addEventListener('blur', validar);
inputTel.addEventListener('blur', validar);
inputMensaje.addEventListener('blur', validar);

formulario.addEventListener('submit');

// Validar 
function validar(e) {
  // console.log(e.target.parentElement.parentElement)
  if (e.target.value.trim() === '') {
      mostrarAlerta(`El Campo ${e.target.id} es obligatorio`, e.target.parentElement);
      email[e.target.name] = '';
      comprobarEmail();
      return;
  } 

  if (e.target.id === 'email' && !validarEmail(e.target.value)) {
    mostrarAlerta('El Email no es válido', e.target.parentElement);
    email[e.target.name] = '';
    comprobarEmail();
    return;
  }

  limpiarAlerta(e.target.parentElement);

  // Asignar los valores
  email[e.target.name] = e.target.value.trim().toLowerCase();
  
  // Comprobar el objeto de email
  comprobarEmail();
}

// Mostrar Alerta
function mostrarAlerta(mensaje, referencia) {
   limpiarAlerta(referencia);
   
   // Generar alerta en HTML
   const error = document.createElement('P');
   error.textContent = mensaje;
   error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

   // Inyectar el error al formulario
   referencia.appendChild(error);
}

// Limpiar Alerta
function limpiarAlerta(referencia) {
  // Comprueba si ya existe una alerta
  const alerta = referencia.querySelector('.bg-red-600');
  if(alerta) {
      alerta.remove();
  }
}

function validarEmail(email) {
  const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const resultado = regex.test(email);
  return resultado;
}

function comprobarEmail() {
  (Object.values(email).includes(''))
}

}); 