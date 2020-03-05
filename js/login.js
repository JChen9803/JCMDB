<!-- Jason Chen (jc4rn) and Cody Miller (cm2gp) -->

window.onload = function() {
    let input = document.getElementById("inputUser").focus();
}

function checkLogin(info){
		if(info.user.value == "student" &&info.pass.value=="password"){
			location.href="user.html"
		}
}


function accountValidation() {
    var name = document.getElementById("inputName").value;
    var username = document.getElementById("inputUsername").value;
    var password1 = document.getElementById("inputPassword1").value;
    var password2 = document.getElementById("inputPassword2").value;

    let valid = false;

    if(name == "") {
        valid = false;
        document.getElementById("inputName").style.borderColor = "red";
        document.getElementById("nameError").style.visibility = "visible";
    }
    else {
		valid=true;
        document.getElementById("inputName").style.borderColor = "#32CD32";
        document.getElementById("nameError").style.visibility = "hidden";
    }

    if(username == "") {
        valid = false;
        document.getElementById("inputUsername").style.borderColor = "red";
        document.getElementById("usernameError").style.visibility = "visible";
    }
    else {
		valid=true;
        document.getElementById("inputUsername").style.borderColor = "#32CD32";
        document.getElementById("usernameError").style.visibility = "hidden";
    }

    if(password1 == "") {
        valid = false;
        document.getElementById("inputPassword1").style.borderColor = "red";
        document.getElementById("password1Error").style.visibility = "visible";
    }
    else {
		valid=true;
        document.getElementById("inputPassword1").style.borderColor = "#32CD32";
        document.getElementById("password1Error").style.visibility = "hidden";
    }

    if(password2 != password1 ||password2=="") {
        valid = false;
        document.getElementById("inputPassword2").style.borderColor = "red";
        document.getElementById("password2Error").style.visibility = "visible";
    }
    else {
		valid=true;
        document.getElementById("inputPassword2").style.borderColor = "#32CD32";
        document.getElementById("password2Error").style.visibility = "hidden";
    }

    if (valid) {
		document.getElementById("closeAccountModal").click();
		document.getElementById("createAccountSuccessMessage").style.display = "block";
		
		$("#closeAccountModal").click(function(){
        $("#createAccountSuccessMessage").fadeOut();
    });
    }

}

let resetAccountModal = () => {
    document.getElementById("inputName").style.removeProperty("border-color");
    document.getElementById("inputUsername").style.removeProperty("border-color");
    document.getElementById("inputPassword1").style.removeProperty("border-color");
    document.getElementById("inputPassword2").style.removeProperty("border-color");
    document.getElementById("nameError").style.visibility = "hidden";
    document.getElementById("usernameError").style.visibility = "hidden";
    document.getElementById("password1Error").style.visibility = "hidden";
    document.getElementById("password2Error").style.visibility = "hidden";
    document.getElementById("inputName").value = "";
    document.getElementById("inputUsername").value = "";
    document.getElementById("inputPassword1").value = "";
    document.getElementById("inputPassword2").value = "";

}