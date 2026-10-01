function togglePassword()
{
let password =
document.getElementById("password");

let confirmPassword =
document.getElementById("confirmPassword");

if(password.type==="password")
{
password.type="text";
confirmPassword.type="text";
}
else
{
password.type="password";
confirmPassword.type="password";
}
}

function toggleLoginPassword()
{
let loginPassword =
document.getElementById("loginPassword");

if(loginPassword.type==="password")
{
loginPassword.type="text";
}
else
{
loginPassword.type="password";
}
}

document.addEventListener("DOMContentLoaded",function(){

let form =
document.getElementById("registerForm");

if(form)
{
form.addEventListener("submit",function(e){

let password =
document.getElementById("password").value;

let confirmPassword =
document.getElementById("confirmPassword").value;

if(password!==confirmPassword)
{
alert("Passwords do not match");
e.preventDefault();
}

});

}

});
