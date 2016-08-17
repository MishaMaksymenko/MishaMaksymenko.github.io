document.addEventListener("DOMContentLoaded", function(){

	var mail = document.getElementById('mail');
	var birthday = document.getElementById('birthday');
	var password = document.getElementById('password');
	var passwordConfirm = document.getElementById('password-confirm');

	// date of birth future restriction
	var today = new Date().toISOString().split('T')[0];
	birthday.setAttribute('max', today);

	// password validation
	function matchPassword(){
	  if(password.value != passwordConfirm.value) {
	    passwordConfirm.setCustomValidity("Passwords Don't Match");
	    passwordConfirm.style.backgroundColor = "#d60000";
	  } else {
	    passwordConfirm.setCustomValidity('');
	    passwordConfirm.style.backgroundColor = "#008a00";
	  }
	}

	password.onchange = matchPassword;
	passwordConfirm.onkeyup = matchPassword;

	// form submit handling
	document.querySelector('form').addEventListener("submit", function(event) {
		event.preventDefault();

		// disabling the register button
		var subButton = document.getElementById('sub');
		subButton.setAttribute('disabled', 'disabled');
		subButton.style.backgroundColor = "#eee";
		
		// AJAX form sending
		var dataString = 'mail=' + mail.value + '&birthday=' + birthday.value + '&password=' + password.value + '&passwordConfirm=' + passwordConfirm.value;
		$.ajax({
			type: "POST",
			url: "action.php",
			data: dataString,
			cache: false,
			success: function(data) {
				alert(data);
			}
		});

		// alert("Welcome " + mail.value);
	})
});