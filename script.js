function AppendValue(value) {
    document.getElementById('display').value += value;
}

function Calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
}

function Sine() {
    let display = document.getElementById('display');
    try {
        display.value = eval(Math.sin(display.value));
    }
    catch {
        display.value = "Error";
    }
}

function Cosine() {
    let display = document.getElementById('display');
    try {
        display.value = eval(Math.cos(display.value));
    }
    catch {
        display.value = "Error";
    }
}

function Logarithm() {
    let display = document.getElementById('display');
    try {
        display.value = eval(Math.log(display.value));
    }
    catch {
        display.value = "Error";
    }
}

function ClearDisplay() {
    document.getElementById('display').value = "";
}
