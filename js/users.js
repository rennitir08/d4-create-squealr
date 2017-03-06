// logout functiion
document.querySelector('#logout').addEventListener('click', function() {
    sessionStorage.clear();
    location.href = 'index.html?logout=yes';
    sessionStorage.removeItem('token');
    alert('you have signed out.');
});
// Display list of users
getUsers();

function getUsers() {
    var token = sessionStorage.getItem('token');

    fetch('https://desolate-mesa-44334.herokuapp.com//users?token=' + token)
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        getUserList(response);
    })
}

function getUserList(users) {
    console.log(users);

    users.forEach(function(user){
        var userList = `<li data-id="${user.id}" class="list-group-item users">
                            <div class="thumbnail">
                                <img id="user" src="${user.avatar}" alt="${user.id}">
                            </div>
                                ${user.username}
                            <input type="checkbox" checked data-toggle="toggle">
                        </li>`;

       document.querySelector('#users').innerHTML += userList;
    });
}

// toggle follow/unfollow button
// document.querySelector('.follow').addEventListener('click', follow());

// follow();

// function follow() {
//     var follow = document.getElementById('.follow');

// 	if (follow.innerHTML === 'Follow') {
// 		follow.innerHTML = 'Unfollow';
// 	}
// 	else if(follow.innerHTML === 'Unfollow') {
//         follow.innerHTML = 'Follow';
//     }
// }

// send user message to profile page
grabProfile();

function grabProfile(user) {
   document.querySelector('.profile').src = user.avatar;
   document.querySelector('#profileUser').innerHTML = user.username;
}
