
// Exercise 6
function validate() {
	var error = 0;
	let isValid = false
	// Get the input fields
	var form = document.getElementById("form1");
	var fName = document.getElementById("fName");
	var fLastName = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");
	var fAddress = document.getElementById("fAddress");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorLastName = document.getElementById("errorLastN");  
	var errorEmail = document.getElementById("errorEmail");  
	var errorPassword = document.getElementById("errorPassword"); 
	var errorPhone = document.getElementById("errorPhone");
	var errorAddress = document.getElementById("errorAddress");
	
	// Validate fields entered by the user: name, phone, password, and email

	form.addEventListener('submit',(e)=>{
		e.preventDefault()
		validarCampos()
		
	})

	const comprobarLetra = (palabra) =>{
		let esTodoLetra = /^[a-zA-ZÀ-ÿ\s]{1,}$/.test(palabra)// expresion regular que indica si es todo letra
		return esTodoLetra
	}

	const comprobarNumero = (telNumero) => {
		let esNumero = /^[0-9]+$/.test(telNumero)
		return esNumero
	}

	const comprobarEmail = (textEmail) => {
		let esEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(textEmail)
		return esEmail
	}

	const comprobarPassword = (textPassword) => {
		let esPasword = /^[a-zA-Z0-9]{1,}$/.test(textPassword)
		return esPasword
	}

	const validarCampos = () =>{
	
		if(fName.value.trim() === "" || fName.value.length < 3 || !comprobarLetra(fName.value)){
			errorName.style.display = 'block'
			error++;
		}else{
			errorName.style.display = 'none'
		}

		if(fLastName.value.trim() === ""|| fLastName.value.length < 3 || !comprobarLetra(fLastName.value) ){
			errorLastName.style.display = 'block'
			error++;
		}else{
			errorLastName.style.display = 'none'
		}

		if(fEmail.value.trim() === ""|| fEmail.value.length < 3 || !comprobarEmail(fEmail.value)){
			errorEmail.style.display = 'block'
			error++
		}else{
			errorEmail.style.display = 'none'
		}

		if(fPassword.value.trim() === ""|| fPassword.value.length < 3 || !comprobarPassword(fPassword.value)){
			errorPassword.style.display = 'block'
			error++
		}else{
			errorPassword.style.display = 'none'
		}

		if(fPhone.value.trim() === ""|| fPhone.value.length < 3 || !comprobarNumero(fPhone.value)){
			errorPhone.style.display = 'block'
			error++
		}else{
			errorPhone.style.display = 'none'
		}

		if(fAddress.value.trim() === ""|| fAddress.value.length < 3){
			errorAddress.style.display = 'block'
			error++
		}else{
			errorAddress.style.display = 'none'
		}
	}

	// Example starter JavaScript for disabling form submissions if there are invalid fields
	(function () {
		'use strict'
	  
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.querySelectorAll('.needs-validation')
	  
		// Loop over them and prevent submission
		Array.prototype.slice.call(forms)
		  .forEach(function (form) {
			form.addEventListener('submit', function (event) {
			  if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			  }
	  
			  form.classList.add('was-validated')
			}, false)
		  })
	  })()

	


	
	/*
	if(error >0){
		alert("Error");
	}else{
		alert("OK");
	}*/

}

