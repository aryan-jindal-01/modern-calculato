const display = document.getElementById("display");

// Add value to display
function append(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        let expression = display.value.replace(/%/g, "/100");
        let result = eval(expression);

        if (result === undefined || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", (e) => {

    const key = e.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        append(key);
    }

    if (key === "Enter") {
        e.preventDefault();
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }
});