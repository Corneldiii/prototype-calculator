document.addEventListener('keydown', (event) => {
    const keyPressed = event.key.toUpperCase();

    switch (keyPressed) {
        case '1':
            appendCharacter('1');
            break;
        case '2':
            appendCharacter('2');
            break;
        case '3':
            appendCharacter('3');
            break;
        case '4':
            appendCharacter('4');
            break;
        case '5':
            appendCharacter('5');
            break;
        case '6':
            appendCharacter('6');
            break;
        case '7':
            appendCharacter('7');
            break;
        case '8':
            appendCharacter('8');
            break;
        case '9':
            appendCharacter('9');
            break;
        case '0':
            appendCharacter('0');
            break;
        case '.':
            appendCharacter('.');
            break;
        case '+':
            appendCharacter('+');
            break;
        case '-':
            appendCharacter('-');
            break;
        case '*':
            appendCharacter('*');
            break;
        case '/':
            appendCharacter('/');
            break;
        case '=':
            calculateResult();
            break;
        case 'C':
            clearDisplay();
            break;
        case 'X':
            removeLastCharacter();
            break;
        default:
            break;
    }
});


let displayValue = "0";

function updateDisplay() {
    document.querySelector('.screen').textContent = displayValue;
}

function appendCharacter(char) {
    if (displayValue === "0" && char !== "0") {
        displayValue = char;
    } else {
        displayValue += char;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function removeLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === "") {
        displayValue = "0";
    }
    updateDisplay();
}

function calculateResult() {
    try {
        let result;
        if (displayValue.includes('%')) {
            const percentageValue = parseFloat(displayValue) / 100;
            result = percentageValue.toString();
        } else {
            result = eval(displayValue).toString();
        }
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}