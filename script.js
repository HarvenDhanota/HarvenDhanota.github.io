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
        display.value = FixedRounding(eval(display.value));
    }
    catch {
        display.value = "Error";
    }
}

function FixedRounding(value) {
    return Number.parseFloat(value.toFixed(10));
}

function Mode() {
    angleUnits = (angleUnits === "RAD") ? "DEG" : "RAD";
    document.getElementById('unitsButton').textContent = angleUnits;
}

function ConvertToRadians(degrees) {
    return (degrees * Math.PI / 180);
}

function Sine() {
    let display = document.getElementById('display');
    let value = eval(display.value)
    try {
        display.value = (angleUnits === "RAD" ? FixedRounding(Math.sin(value)) : FixedRounding(Math.sin(ConvertToRadians(value))));
    }
    catch {
        display.value = "Error";
    }
}

function Cosine() {
    let display = document.getElementById('display');
    let value = eval(display.value)
    try {
        display.value = (angleUnits === "RAD" ? FixedRounding(Math.cos(value)) : FixedRounding(Math.cos(ConvertToRadians(value))));
    }
    catch {
        display.value = "Error";
    }
}

function Tangent() {
    let display = document.getElementById('display');
    let value = eval(display.value)
    try {
        display.value = (angleUnits === "RAD" ? FixedRounding(Math.tan(value)) : FixedRounding(Math.tan(ConvertToRadians(value))));
    }
    catch {
        display.value = "Error";
    }
}

function Logarithm() {
    let display = document.getElementById('display');
    try {
        display.value = FixedRounding(Math.log(eval(display.value)));
    }
    catch {
        display.value = "Error";
    }
}

function ClearDisplay() {
    document.getElementById('display').value = "";
}
