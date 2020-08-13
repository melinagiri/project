function bg(){
	var name= document.getElementById("name");
	var Password= document.getElementById("password");
	var repassword= document.getElementById("repassword");
	var Email= document.getElementById("email");
	var gender= document.getElementById("gender");
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
				document.getElementById("nameerror").innerHTML="*Username must have first and last name in alphabets";
			return false;
			}
		}
	//email validation
		if (Email.value=="") {
			document.getElementById("emailerror").innerHTML="*Email field is empty";
			return false;
		}
		else{
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(Email.value.match(mailformat)){
				document.getElementById("emailerror").innerHTML="";
			}
			else{
				document.getElementById("emailerror").innerHTML="*invalid email";
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
				document.getElementById("passerror").innerHTML="*password should contain alphabets with upper and lower case, digits, special character, (8-15) character";
				return false;
			}
			
		}
	//repassword validation
	if (repassword.value=="") {
		document.getElementById("repasserror").innerHTML="**Re-enter password field empty";
		false;
	}
	else{
		if(pass!=pass1){
			document.getElementById("repasserror").innerHTML="**password doesnot match";
			false;
		}
		else{
			document.getElementById("repasserror").innerHTML="";
		}
	}
	//gender validation
	/*if(gender.value=""){
		document.getElementById("gendererror").innerHTML="*select gender";
	}
	else{
		document.getElementById("gendererror").innerHTML="";
	}*/
}