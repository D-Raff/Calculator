const numButtons = document.querySelectorAll('[data-number]')
const actionButtons = document.querySelectorAll('[data-action]')
const equalsBtn = document.querySelector('[data-equals]')
const clearBtn = document.querySelector('[data-clear]')
const delBtn = document.querySelector('[data-delete]')
const Current = document.querySelector('[data-current]')
const Result = document.querySelector('[data-res]')

let currDisplay = "0";
let resDisplay = false;

function appendToDisplay(value) {
    if (currDisplay === "0" || resDisplay) {
      currtDisplay = value;
    } else {
      currDisplay += value;
    }
    resDisplay = false;
    updateDisplay();
  }

function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = currDisplay;
  }


function calculateResult() {
    try {
      const result = eval(currDisplay);
  
      currDisplay += "\n=" + result.toString();
  
      updateDisplay();
    } catch (error) {
      currDisplay += "\nError";
  
      updateDisplay();
    }
    resDisplay = true;
  }

  function clearDisplay() {
    currentDisplay = "0";
    resultDisplay = false;
    updateDisplay();
  }