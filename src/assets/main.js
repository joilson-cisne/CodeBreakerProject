let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let results = document.getElementById('results');
let code = document.getElementById('code');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (!validateInput(input.value)) {
        return false;
    }
    
    if (!answer.value && !attempt.value) {
        setHiddenFields();
    }

    attempt.value = Number(attempt.value) + 1;

    const win = getResults(input.value);

    if (win) {
        setMessage("You Win! :)");
    } else if (Number(attempt.value) >= 10) {
        setMessage("You Lose! :(");
    } else {
        setMessage("Incorrect, try again.");
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

function setMessage(text) {
    message = document.getElementById('message');
    message.innerHTML = text;
}

function validateInput(input) {
    if (input.length === 4) {
        return true;
    }

    setMessage("Guesses must be exactly 4 characters long.");
    return false;
}

function getResults(input) {
    let html = `<div class="row"><span class="col-md-6">' ${input} '</span><div class="col-md-6">`;
    
    for (let i = 0; i < input.length; i++) {
        const digit = input[i];
        
        if (answer.value[i] === digit) {
            html += `<span class="glyphicon glyphicon-ok"></span>`;
        } else if (answer.value.indexOf(digit) > -1) {
            html += `<span class="glyphicon glyphicon-transfer"></span>`;
        } else {
            html += `<span class="glyphicon glyphicon-remove"></span>`;
        }
    }
    
    results.innerHTML = html;

    return input === answer.value;
}

function showAnswer(win) {
    code.innerHTML = answer.value;

    if (win) {
        code.classList.add("success");
    } else {
        code.classList.add("failure");
    }
}
