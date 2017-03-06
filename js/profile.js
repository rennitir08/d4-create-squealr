getSqueals();

function getSqueals() {
    var token = sessionStorage.getItem('token');

    fetch('https://desolate-mesa-44334.herokuapp.com//squeals?token=' + token)

    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        getSqueals(response);
    })
}

function getSqual(messages) {
    console.log(messages);

    messages = messages.reverse();

    messages.forEach(createMessage);
}

function createMessage(message) {
    var listOfSqueals = `<li data-id="${message.id}" class="list-group-item">${message.body}</li>`;
    var currentSqueal = document.querySelector('#message').innerHTML;

    document.querySelector('#messages').innerHTML = listOfSqueals + currentSqueal;
}
