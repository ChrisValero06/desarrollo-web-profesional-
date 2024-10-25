const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

// Usuario y contraseña válidos
const validUsername = "chris valero";
const validPassword = "1234";

// Función para verificar el estado de los campos
function validateForm() {
    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();
    
    // Habilita el botón solo si ambos campos son válidos
    loginButton.disabled = !(isUsernameValid && isPasswordValid);
}

// Validación del usuario
function validateUsername() {
    const username = usernameInput.value.trim();
    if (!username) {
        usernameError.textContent = 'El campo de usuario no puede estar vacío';
        usernameError.style.display = 'block';
        return false;
    } else if (username !== validUsername) {
        usernameError.textContent = 'Usuario no reconocido';
        usernameError.style.display = 'block';
        return false;
    } else {
        usernameError.style.display = 'none';
        return true;
    }
}

// Validación de la contraseña
function validatePassword() {
    const password = passwordInput.value;
    if (!password) {
        passwordError.textContent = 'La contraseña no puede estar vacía';
        passwordError.style.display = 'block';
        return false;
    } else if (password !== validPassword) {
        passwordError.textContent = 'Contraseña incorrecta';
        passwordError.style.display = 'block';
        return false;
    } else {
        passwordError.style.display = 'none';
        return true;
    }
}

// Escuchadores de eventos
usernameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

// Validación al enviar el formulario
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío para pruebas

    // Verifica si los datos son correctos antes de redirigir
    if (usernameInput.value === validUsername && passwordInput.value === validPassword) {
        window.location.href = 'index.html'; // Redirige a index.html
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
