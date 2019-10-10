const inputFirstName = document.getElementById('inputFirstName');
const inputLastName = document.getElementById('inputLastName');
const inputEmail = document.getElementById('inputEmail4');
const inputPhoneNum = document.getElementById('inputPhonenum')
const button = document.querySelector('button');
const regEx = /\S+@\S+\.\S+/;
const form = document.querySelector('form');
const password = document.getElementById('inputPassword');
const address = document.getElementById('inputAddress');
const city = document.getElementById('inputCity');
const state = document.getElementById('selectState');

function validateForm(){
	if (inputFirstName.value.trim() !== "" && regEx.test(inputEmail.value) && inputLastName.value.trim() !== "" && inputPhonenum.value.trim() !== "" && password.value !=="" && (password.value.length > 5) && address.value !=="" && city.value !==""){
		button.style.backgroundColor = "#5d5dec";
		button.disabled = false;
	} else {
		button.style.backgroundColor = "#979695";
		button.disabled = true;
	}
}
function validateDropDown(){
	if (state.value =="")
	{	
		alert('Please select a state');
		return false;
	}
	return true;
}
form.addEventListener('submit', function(event) {
	event.preventDefault();
	console.log('submitted');
})