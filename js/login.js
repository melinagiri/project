function correct() {
	var name= document.getElementById("name");
	var Password= document.getElementById("password");
	//name validation
		if(name.value=="") {
			document.getElementById("nameerror").innerHTML="*Name field is empty";
			return false;
		}
		else{
			var letters = /^[a-zA-Z]+ [a-zA-Z]+$/;
			if(name.value.match(letters)){
				document.getElementById("nameerror").innerHTML="";
			}
			else{
				document.getElementById("nameerror").innerHTML="*invalid username";
			return false;
			}
		}

		//password validation
		if (Password.value=="") {
			document.getElementById("passerror").innerHTML="*Password field is empty";
			return false;
		}
		else{
			var paswd= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
			if(Password.value.match(paswd)) {
				document.getElementById("passerror").innerHTML="";
			}
			else{
				document.getElementById("passerror").innerHTML="*invalid password";
				return false;
			}
			
		}
}