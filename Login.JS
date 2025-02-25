document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.toLowerCase();
    const password = passwordInput.value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(u => u.email === email && u.password === password);

    if (validUser) {
        document.getElementById('error').style.display = 'none';
        window.location.href = 'Index.html';
        if (rememberMe.checked) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
        }
    } else {
        document.getElementById('error').style.display = 'block';
    }
});

const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('Password');
const rememberMe = document.getElementById('rememberMe');

const storedEmail = localStorage.getItem('email');
const storedPassword = localStorage.getItem('password');

if (storedEmail && storedPassword) {
    emailInput.value = storedEmail;
    passwordInput.value = storedPassword;
    rememberMe.checked = true;
}

