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
    let value = eval(display.value);
    
    try {
        if (angleUnits === "RAD") {
            value = value;
        }
        else {
            value = ConvertToRadians(value);
        }

        display.value = FixedRounding(Math.sin(value));
    }
    catch {
        display.value = "Error";
    }
}

function Cosine() {
    let display = document.getElementById('display');
    let value = eval(display.value);
    
    try {
        if (angleUnits === "RAD") {
            value = value;
        }
        else {
            value = ConvertToRadians(value);
        }

        display.value = FixedRounding(Math.cos(value));
    }
    catch {
        display.value = "Error";
    }
}

function Tangent() {
    let display = document.getElementById('display');
    let value = eval(display.value);
    
    try {
        if (angleUnits === "RAD") {
            value = value;
        }
        else {
            value = ConvertToRadians(value);
        }

        let output = FixedRounding(Math.tan(value));

        if (Math.abs(output) > 1e12) {
            display.value = "undefined"
        }
        else {
            display.value = output;
        }
    }
    catch {
        display.value = "Error";
    }
}

function Logarithm() {
    let display = document.getElementById('display');
    let value = eval(display.value);
    try {
        if (value <= 0) {
            display.value = "undefined"
        }
        else {
            display.value = FixedRounding(Math.log(value));
        }
    }
    catch {
        display.value = "Error";
    }
}

function ClearDisplay() {
    document.getElementById('display').value = "";
}
