var englishButton = document.getElementById('englishButton');
console.log(englishButton)
englishButton.addEventListener('click', function(params) {
    alert("Good Morning!");
});

var spanishButton = document.getElementById('spanishButton');
spanishButton.addEventListener('click', function(params) {
    alert("Buaenos Dias!");
});

var chineseButton = document.getElementById('chineseButton');
chineseButton.addEventListener('click', function(params) {
    alert("Zǎoshang hǎo!");
});

var greekButton = document.getElementById('greekButton');
greekButton.addEventListener('click', function(params) {
    alert("Kaliméra!");
});
var expandibleButton = document.getElementById('expandOnClick');
expandibleButton.addEventListener('click', function(params) {
    this.classList.add("increase");

});
let lastName = document.getElementById('last_name');
let firstName = document.getElementById('first_name');
let submit = document.getElementById('submit');
let welcome = document.getElementById('welcome');

submit.addEventListener('click', function(e) {

    e.preventDefault();
    welcome.innerHTML = `Welcome ${firstName.value} ${lastName.value}`
})