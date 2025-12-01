function AppendValue(value) {
    document.getElementById('display').value += value;
}

function AppendEulerConstant() {
    document.getElementById('display').value += Math.E;
}

function AppendPiConstant() {
    document.getElementById('display').value += Math.PI;
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
        display.value = Math.sin(eval(display.value));
    }
    catch {
        display.value = "Error";
    }
}

function Cosine() {
    let display = document.getElementById('display');
    try {
        display.value = Math.cos(eval(display.value));
    }
    catch {
        display.value = "Error";
    }
}

function Tangent() {
    let display = document.getElementById('display');
    try {
        display.value = Math.tan(eval(display.value));
    }
    catch {
        display.value = "Error";
    }
}

function Logarithm() {
    let display = document.getElementById('display');
    try {
        display.value = Math.log(eval(display.value));
    }
    catch {
        display.value = "Error";
    }
}

function ClearDisplay() {
    document.getElementById('display').value = "";
}
