function login() {
    var logininput=document.getElementById("logininput");
    logininput.style.display="block";
    var height=document.getElementById("insta")
    height.style.height="400px"
    var signup=document.getElementById("signupinput")
    signup.style.display="none"
}
function signup() {
    var signup=document.getElementById("signupinput")
    signup.style.display="block"
    var height=document.getElementById("insta")
    height.style.height="600px"
    var logininput=document.getElementById("logininput");
    logininput.style.display="none";
}