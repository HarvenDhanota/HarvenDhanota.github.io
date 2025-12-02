let angleUnits = "RAD";

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

function Mode() {
    angleUnits = (angleUnits === "RAD") ? "DEG" : "RAD";
    document.getElementById('unitsButton').textContent = angleUnits;
}

function ConvertToDegrees(radians) {
    return (radians * 180 / Math.PI);
}

function Sine() {
    let display = document.getElementById('display');
    let value = eval(display.value)
    try {
        display.value = (angleUnits === "RAD" ? Math.sin(value) : Math.sin(ConvertToDegrees(value)));
    }
    catch {
        display.value = "Error";
    }
}

function Cosine() {
    let display = document.getElementById('display');
    let value = eval(display.value)
    try {
        display.value = (angleUnits === "RAD" ? Math.cos(value) : Math.cos(ConvertToDegrees(value)));
    }
    catch {
        display.value = "Error";
    }
}

function Tangent() {
    let display = document.getElementById('display');
    let value = eval(display.value)
    try {
        display.value = (angleUnits === "RAD" ? Math.tan(value) : Math.tan(ConvertToDegrees(value)));
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
