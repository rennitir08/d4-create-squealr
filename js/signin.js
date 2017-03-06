document.querySelector('#signin').addEventListener('click', signin);

function signin() {
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    // alert(username, password);

    fetch('https://desolate-mesa-44334.herokuapp.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);

            if (response.token) {
                sessionStorage.setItem('token', response.token);
                location.href = 'users.html';
            }
        })    
}

