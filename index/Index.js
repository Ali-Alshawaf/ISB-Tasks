document.getElementById('Logout').addEventListener('click', function() {

localStorage.removeItem('users');

window.location.href = '../Login/Login.html'; 

});
