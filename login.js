var firebaseConfig = {
    apiKey: "AIzaSyBiydb9tqJp526GBYwTqv3S7P_ErmOntLg",
    authDomain: "mom-login-a6e00.firebaseapp.com",
    projectId: "mom-login-a6e00",
    storageBucket: "mom-login-a6e00.appspot.com",
    messagingSenderId: "14987956774",
    appId: "1:14987956774:web:f55080976493fa99a20ce7"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()
  
  
  
  function regii(){
    var email = document.getElementById('email').value
    var namee = document.getElementById('namee').value
    var inst = document.getElementById('inst').value
    var phone = document.getElementById('phone').value
    var pass = document.getElementById('pass').value

    if(valid_email(email) == false){
      alert('Email is not valid');
      return;
    }
    
    if(valid_pass(pass) == false){
      alert('Password cannot be of less than 8 characters');
      return;
    }
    
    auth.createUserWithEmailAndPassword(email, pass)
    .then(function() {
      var user = auth.currentUser;
      var database_ref = database.ref();
      var user_data = {
        namee:namee,
        email:email,
        pass:pass,
        inst:inst,
        phone:phone,
        last_login:Date.now()
      };
      database_ref.child('users/' + user.uid).set(user_data)
      alert('Registration Successful!');
    })

    .catch(function(error){
      var error_code = error.code;
      var error_message = error.message;
      alert(error_message);
    });
  }



    
    
    
    
    function valid_email(email){
      var exp = /^[^@]+@\w+(\.\w+)+\w$/;
      if(exp.test(email)== true)
      {
        return true
      }
      else{
        return false
      }
    }
    
    function valid_pass(pass){
      if(pass.length < 8)
      {
        return false;
      }
      else{
        return true;
      }
    }

  
  
  