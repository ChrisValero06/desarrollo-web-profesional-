
const usuarios = {
    'adminUser': { username: 'adminUser', password: 'admin123' },
    'clienteUser': { username: 'clienteUser', password: 'cliente123' },
    'visitanteUser': { username: 'visitanteUser', password: 'guest123' }
};


function isValidPassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
    return regex.test(password);
}


document.getElementById('recoverForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const newPassword = document.getElementById('newPassword').value;

    if (!usuarios[username]) {
        alert("Usuario no encontrado.");
        return;
    }

    if (!isValidPassword(newPassword)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.");
        return;
    }

    
    usuarios[username].password = newPassword;
    alert("¡Contraseña actualizada con éxito!");
    window.location.href = 'Login.html';
});
