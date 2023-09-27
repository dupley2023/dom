function registrarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (nombre && apellido && username && password) {
        const mensajeRegistro = document.getElementById("mensajeRegistro");
        mensajeRegistro.textContent = "Usuario registrado.";
    }
}
