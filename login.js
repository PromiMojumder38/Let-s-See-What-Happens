//toggle between reg and login

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const signupToggle = document.getElementById("signup-toggle");
const loginToggle = document.getElementById("login-toggle");

signupForm.style.display = "none";

signupToggle.addEventListener("click", () => {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});

loginToggle.addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });


  //remember pass

  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.getElementById("rememberMe").checked;
  
    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
  
    document.forms[0].reset();
  
    var alertBox = document.getElementById("alertBox");
    var storedUsername = localStorage.getItem("username");
  
    if (storedUsername) {
      document.getElementById("greet").innerHTML = storedUsername;
      alertBox.style.display = "block";
    }
  }
  
  function closeAlert() {
    var alertBox = document.getElementById("alertBox");
    alertBox.style.display = "none";
  }
  