function show_password() {
  var password = document.getElementById("password");
  var eye_show = document.getElementById("show");
  var eye_hide = document.getElementById("hide");

  if(password.type == 'password'){
    password.type = "text";
    eye_show.style.display = "block";
    eye_hide.style.display = "none";
  }
  else {
    password.type = "password";
    eye_show.style.display = "none";
    eye_hide.style.display = "block";
  }
}
