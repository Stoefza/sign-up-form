const passOne = document.getElementById("password_1");
const passTwo = document.getElementById("password_2");
const passwordFields = document.querySelectorAll(".password-input");
const pwText = document.querySelector(".pw-text");


passwordFields.forEach(passwordInput => {
	passwordInput.addEventListener("keyup", () => {
		if (passOne.value !== ""){
		if (checkValidity(passOne.value, passTwo.value) === true) {
			console.log("passwords Match");
			passwordFields.forEach(field => {
				field.classList.add("password-match-valid");
				field.classList.remove("password-match-invalid");
			});
			pwText.classList.remove("invalid-text");
			pwText.classList.add("valid-text");
			pwText.textContent = "Passwords match";
		} else {
			console.log("passwords  do not Match");
			passwordFields.forEach(field => {
				field.classList.add("password-match-invalid");
				field.classList.remove("password-match-valid");
			});
			pwText.classList.remove("valid-text");
			pwText.classList.add("invalid-text");
			pwText.textContent = "Passwords do not match";
		}
	}})
});



function checkValidity(passOneInput, passTwoInput) {
	if (passOneInput === passTwoInput) {
		return true;
	} else {
		false;
	}
}
