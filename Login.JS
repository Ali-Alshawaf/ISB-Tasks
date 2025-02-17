
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('Email').value;
        const password = document.getElementById('Password').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];

        const validUser = users.find(user => user.email === email && user.password === password);

        if (validUser) {
            alert('تم تسجيل الدخول بنجاح');
            document.getElementById('error').style.display = 'none';
        } else {
            document.getElementById('error').style.display = 'block';
        }
    });
