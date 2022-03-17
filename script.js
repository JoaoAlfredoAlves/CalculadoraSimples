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
	}

	clear() {
		this.currentOperand = "";
		this.previousOperand = "";
		this.operation = undefined;
	}

	updateDisplay() {
		this.previousOperandTextElement.innerText = this.previousOperand;
		this.currentOperandTextElement.innerText = this.currentOperand;
	}
}

const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
);

allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
});
