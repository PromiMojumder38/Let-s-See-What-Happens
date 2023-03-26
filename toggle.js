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