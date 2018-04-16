let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (!answer.value && !attempt.value) {
        setHiddenFields();
    }
}

//implement new functions here
Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  }
  

function setHiddenFields() {
    attempt.value = 0;

    randomNumber = Math.floor(Math.random() * 10000);
    answer.value = randomNumber.pad(4);
}