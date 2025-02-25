document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    const number = document.getElementById('Number').value;
    const password = document.getElementById('Password').value;

    let users = JSON.parse(localStorage.getItem('users'));

    const nameExists = users.some(u => u.name === name);
    const emailExists = users.some(u => u.email === email);
    const validNumber = number.length === 10;

    if (nameExists) {
        document.getElementById('ErrorName').style.display = 'block';
    } else {
        document.getElementById('ErrorName').style.display = 'none';
    }

    if (emailExists) {
        document.getElementById('ErrorEmail').style.display = 'block';
    } else {
        document.getElementById('ErrorEmail').style.display = 'none';
    }

    if (!validNumber) {
        document.getElementById('ErrorNumber').style.display = 'block';
    } else {
        document.getElementById('ErrorNumber').style.display = 'none';
    }

    if (!nameExists && !emailExists && validNumber) {
        users.push({ name, email, number, password });
        localStorage.setItem('users', JSON.stringify(users));
        console.log('users', users)
        alert('تم التسجيل بنجاح');
    }
});

