
// Exercise 6
// Get the input fields
var fName = document.getElementById("fName");
var fLastName = document.getElementById("fLastN");
var fEmail = document.getElementById("fEmail");
var fPassword = document.getElementById("fPassword");
var fPhone = document.getElementById("fPhone");
var fAddress = document.getElementById("fAddress");


function comprobarLetra(palabra) {
	let esTodoLetra = /^[A-Za-zÀ-ÿ\s]+$/.test(palabra)// expresion regular que indica si es todo letra
	return esTodoLetra
}

function comprobarNumero(telNumero) {
	let esNumero = /^[0-9]+$/.test(telNumero)
	return esNumero
}

function comprobarEmail(textEmail) {
	let esEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(textEmail)
	return esEmail
}

function comprobarPassword(textPassword) {
	let esPasword = /^[a-zA-Z0-9]{1,}$/.test(textPassword)
	return esPasword
}


function validate(event) {
	event.preventDefault();

	
	// Validate fields entered by the user: name, phone, password, and email

	if (fName.value.trim() === "" || fName.value.length < 3 || !comprobarLetra(fName.value)) {
		fName.classList.add("is-invalid");
	} else {
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
	}

	if (fLastName.value.trim() === "" || fLastName.value.length < 3 || !comprobarLetra(fLastName.value)) {
		fLastName.classList.add("is-invalid");
		error++;
	} else {
		fLastName.classList.remove("is-invalid");
		fLastName.classList.add("is-valid");
		
	}

	if (fEmail.value.trim() === "" || fEmail.value.length < 3 || !comprobarEmail(fEmail.value)) {
		fEmail.classList.add("is-invalid")
	} else {
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
	}

	if (fPassword.value.trim() === "" || fPassword.value.length < 3 || !comprobarPassword(fPassword.value)) {
		fPassword.classList.add("is-invalid")
	} else {
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
	}

	if (fPhone.value.trim() === "" || fPhone.value.length < 3 || !comprobarNumero(fPhone.value)) {
		fPhone.classList.add("is-invalid")
	} else {
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
	}

	if (fAddress.value.trim() === "" || fAddress.value.length < 3) {
		fAddress.classList.add("is-invalid")
		
	} else {
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");
	}
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()









