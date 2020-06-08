
function validate() {
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;
  if (name == "admin" && username == "admin" && email == "admin@gmail" && password == "1234" && password2 == "1234") {
    alert("Registro Completado");
    window.location = "index.html"; // Redirecting to other page.
    return false;
  }
  if (password2 !== "1234"){
    alert("Las contraseñas no coinciden");

  }
 
}
