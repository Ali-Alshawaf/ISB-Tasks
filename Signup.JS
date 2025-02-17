document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    const number = document.getElementById('Number').value;
    const password = document.getElementById('Password').value;

    let users = JSON.parse(localStorage.getItem('users')) ;

    const nameExists = users.some(user => user.name === name);
    const emailExists = users.some(user => user.email === email);

    if (nameExists){
        document.getElementById('ErrorName').style.display = 'block';

    }else{
        document.getElementById('ErrorName').style.display = 'none';

    }

    if(emailExists){
        document.getElementById('ErrorEmail').style.display = 'block';

    }else{
        document.getElementById('ErrorEmail').style.display = 'none';

    }

    if (!nameExists && !emailExists) {
        users.push({ name, email, number, password });
        localStorage.setItem('users', JSON.stringify(users));
        console.log('users', users)
        alert('تم التسجيل بنجاح');
    }
});

