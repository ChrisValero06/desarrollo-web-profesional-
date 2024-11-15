const usuarios = {
    'adminUser': { username: 'adminUser', password: 'admin123' },
    'clienteUser': { username: 'clienteUser', password: 'cliente123' },
    'visitanteUser': { username: 'visitanteUser', password: 'guest123' }
};

document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (usuarios[username] && usuarios[username].password === password) {
        alert("Inicio de sesión exitoso");
        window.location.href = 'index.html'; 
    } else {
        alert("Credenciales incorrectas. Verifica tu usuario o contraseña.");
    }
});

