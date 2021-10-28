

window.addEventListener('load', function () {

    const numbers = this.document.querySelectorAll('[data-number]');
    const operetions = this.document.querySelectorAll('[data-operation]');
    const equalsBtn = this.document.querySelector('[data-equals]');
    const deletesBtn = this.document.querySelector('[data-delete]');
    const clearBtn = this.document.querySelector('[data-all-clear]');
    const previousMemory = this.document.querySelector('[data-previous-operand]');
    const currentMemory = this.document.querySelector('[data-current-operand]');
    const pointBtn = this.document.querySelector('[data-point]');
    var CalculateMenory = '';
    var BoolingNumber = false;
    var BoolingMemory = false;
    var Oper = '';


    numbers.forEach((numBtn) => {
        numBtn.addEventListener('click', funNumbers)
    });

    operetions.forEach((operBtn) => {
        operBtn.addEventListener('click', funOperetions)
    });

    equalsBtn.addEventListener('click', funEqualsBtn)

    pointBtn.addEventListener('click', funPointBtn)
    clearBtn.addEventListener('click', funClearBtn)
    deletesBtn.addEventListener('click', funDeletesBtn)

    function funNumbers(e) {
        let num = e.target.innerText;
        if (currentMemory.innerText != '0' || currentMemory.innerText != '0.') {
            if (BoolingNumber) {
                if (BoolingMemory === true) {
                    currentMemory.innerText = num;
                    BoolingNumber = false;
                } else {
                    CalculateMenory = currentMemory.innerText;
                    console.log(CalculateMenory);
                    currentMemory.innerText = num;
                    BoolingNumber = false;
                }
            } else if (BoolingNumber === false) {
                currentMemory.innerText += num;
                console.log(currentMemory);
            }
        } else {
            currentMemory.innerText = num;
        }
    }

    function funOperetions(e) {
        Oper = e.target.innerText;
        BoolingNumber = true;
    }

    function funEqualsBtn(e) {
        if (Oper === '+') {
            CalculateMenory = +(CalculateMenory) + +(currentMemory.innerText);
            console.log(CalculateMenory);
            previousMemory.innerText = CalculateMenory;
            console.log(previousMemory);
            BoolingMemory = true;
        } else if (Oper === '-') {
            CalculateMenory = +(CalculateMenory) - +(currentMemory.innerText);
            console.log(CalculateMenory);
            previousMemory.innerText = CalculateMenory;
            console.log(previousMemory);
            BoolingMemory = true;
        } else if (Oper === '*') {
            CalculateMenory = +(CalculateMenory) * +(currentMemory.innerText);
            console.log(CalculateMenory);
            previousMemory.innerText = CalculateMenory;
            console.log(previousMemory);
            BoolingMemory = true;
        } else if (Oper === '/') {
            CalculateMenory = +(CalculateMenory) / +(currentMemory.innerText);
            console.log(CalculateMenory);
            previousMemory.innerText = CalculateMenory;
            console.log(previousMemory);
            BoolingMemory = true;
        }
    }

    function funPointBtn(e) {
        let point = e.target.innerText;
        if (currentMemory.innerText.includes('.') === false || currentMemory.innerText === '0') {
            currentMemory.innerText += point;
        }

    }

    function funClearBtn(e) {
        CalculateMenory = '';
        BoolingNumber = false;
        BoolingMemory = false;
        Oper = '';
        currentMemory.innerText = '';
        previousMemory.innerText = '';
    }

    function funDeletesBtn(e) {
        currentMemory.innerText = currentMemory.innerText.substring(0, currentMemory.innerText.length - 1);
    }
})


//------------- пример учителя----------------
/*

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement;
      this.currentOperandTextElement = currentOperandTextElement;
      this.clear();
    }

    clear() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = undefined;
    }

    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
      if (number === "." && this.currentOperand.includes(".")) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
      if (this.currentOperand === "") return;
      if (this.previousOperand !== "") {
        this.compute();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
    }

    compute() {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operation) {
        case "+":
          computation = prev + current;
          break;
        case "-":
          computation = prev - current;
          break;
        case "*":
          computation = prev * current;
          break;
        case "/":
          computation = prev / current;
          break;
        default:
          return;
      }
      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = "";
    }

    getDisplayNumber(number) {
      const stringNumber = number.toString();
      const integerDigits = parseFloat(stringNumber.split(".")[0]);
      const decimalDigits = stringNumber.split(".")[1];
      let integerDisplay;
      if (isNaN(integerDigits)) {
        integerDisplay = "";
      } else {
        integerDisplay = integerDigits.toLocaleString("en", {
          maximumFractionDigits: 0,
        });
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
      } else {
        return integerDisplay;
      }
    }

    updateDisplay() {
      this.currentOperandTextElement.innerText = this.getDisplayNumber(
        this.currentOperand
      );
      if (this.operation != null) {
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
          this.previousOperand
        )} ${this.operation}`;
      } else {
        this.previousOperandTextElement.innerText = "";
      }
    }
  }

  const numberButtons = document.querySelectorAll("[data-number]");
  const operationButtons = document.querySelectorAll("[data-operation]");
  const equalsButton = document.querySelector("[data-equals]");
  const deleteButton = document.querySelector("[data-delete]");
  const allClearButton = document.querySelector("[data-all-clear]");
  const previousOperandTextElement = document.querySelector(
    "[data-previous-operand]"
  );
  const currentOperandTextElement = document.querySelector(
    "[data-current-operand]"
  );

  const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
  );

  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    });
  });

  operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    });
  });

  equalsButton.addEventListener("click", (button) => {
    calculator.compute();
    calculator.updateDisplay();
  });

  allClearButton.addEventListener("click", (button) => {
    calculator.clear();
    calculator.updateDisplay();
  });

  deleteButton.addEventListener("click", (button) => {
    calculator.delete();
    calculator.updateDisplay();
  });
  */