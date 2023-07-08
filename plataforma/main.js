document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir envío del formulario

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Aquí puedes agregar tu lógica de verificación de credenciales
  // En este ejemplo, se compara el usuario y la contraseña con valores estáticos
  if (username === "usuario" && password === "password") {
      document.getElementById("message").textContent = "Inicio de sesión exitoso.";
      // Redireccionar a la página main.html
      window.location.href = "main.html";
  } else {
      document.getElementById("message").textContent = "Credenciales incorrectas. Intenta nuevamente.";
  }
});

