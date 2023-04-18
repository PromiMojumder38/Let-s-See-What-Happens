function hidePopup() {
    var popupSuccess = document.getElementById("popup-success");
    var popupError = document.getElementById("popup-error");
    popupSuccess.style.display = "none";
    popupError.style.display = "none";
  }

  function hidePopup2() {
    var popupSuccess2 = document.getElementById("popup-success2");
    var popupError2 = document.getElementById("popup-error2");
    popupSuccess2.style.display = "none";
    popupError2.style.display = "none";
  }

  function toggle() {
    var registrationForm = document.getElementById("registration");
    var loginForm = document.getElementById("loginn");

      registrationForm.style.display = "none";
      loginForm.style.display = "block";
  }

  function toggle2() {
    var registrationForm = document.getElementById("registration");
    var loginForm = document.getElementById("loginn");

      registrationForm.style.display = "block";
      loginForm.style.display = "none";
  }

  