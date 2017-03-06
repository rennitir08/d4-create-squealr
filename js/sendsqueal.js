document.querySelector('#squeal').addEventListener('click', sendSqueal);

document.querySelector('#send').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendSqueal();
    }
})
function sendSqueal() {
    var squeal = document.querySelector('#squeal').value;
    var token = sessionStorage.getItem('token');

    document.querySelector('#squeal').value = '';

    fetch('https://desolate-mesa-44334.herokuapp.com/squeals?token=' + token), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            body: squeal,
            token: token
        })
    }
        // .then(function(response) {
        //     return response.json();
        // })
        // .then(function(response) {
        // })
}