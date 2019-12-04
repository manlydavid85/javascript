document.getElementById('submit').addEventListener('click', function(e) {
    let lastName = document.getElementById('last_name');
    let firstName = document.getElementById('first_name');
    let welcome = document.getElementById('welcome');
    e.preventDefault();
    welcome.innerHTML = `Welcome ${firstName.value} ${lastName.value}.`;
});