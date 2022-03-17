const numberButtons = document.querySelectorAll("[number]");
const operationButtons = document.querySelectorAll("[operator]");
const equalsButton = document.querySelector("[equals]");
const deleteButton = document.querySelector("[delete]");
const allClearButton = document.querySelector("[allClear]");
const previousOperandTextElement = document.querySelector("[previousOperand]");
const currentOperandTextElement = document.querySelector("[currentOperand]");





class Calculator {
	constructor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
	}

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    calculate() {
        let result;

        const _previousOperand = parseFloat(this.previousOperand);
        const _currentOperand = parseFloat(this.currentOperand);

        if (isNaN(_previousOperand) || isNaN(_currentOperand)) return;

        switch (this.operation) {
            case "+":
                result = _previousOperand + _currentOperand;
                break;
            case "-":
                result = _previousOperand - _currentOperand;
                break;
            case "/":
                result = _previousOperand / _currentOperand;
                break;
            case "*":
                result = _previousOperand * _currentOperand;
                break;
            default:
                return;
        }

        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = "";
    }

    chooseOperation(operation) {
        if (this.previousOperand != "") {
            this.calculate();
        }

        this.operation = operation;

        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    appendNumber(number) {
        if(this.currentOperand.includes('.') && number === '.') 
            return;
        this.currentOperand = `${this.currentOperand}${number.toString()}`;
    }

	clear() {
		this.currentOperand = "";
		this.previousOperand = "";
		this.operation = undefined;
	}

	updateDisplay() {
		this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation || ""}`;
		this.currentOperandTextElement.innerText = this.currentOperand;
	}
}

const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
);

for (const numberButton of numberButtons) {
    numberButton.addEventListener("click", () => {
        calculator.appendNumber(numberButton.innerText);
        calculator.updateDisplay();
    });
}

for (const operationButton of operationButtons) {
    operationButton.addEventListener("click", () => {
        calculator.chooseOperation(operationButton.innerText);
        calculator.updateDisplay();
    });
}

allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
});

equalsButton.addEventListener("click", () => {
    calculator.calculate();
    calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
});
