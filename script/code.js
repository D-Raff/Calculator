const display = document.getElementById("display");
const buttons = document.querySelectorAll("[data-value]");
let operators = ["+", "-", "*", "/", "."];

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const value = button.getAttribute("data-value");

    if (operators.includes(value)) {
      if (currentInput.includes(value)) {
        return;
      }
    }

    if (value === "=") {
      try {
        currentInput = eval(currentInput);

        display.value = currentInput;
      } catch (error) {
        display.value = "Error";
      }
    } else if (value === "C") {
      currentInput = "";

      display.value = "";

      operators.forEach((operator) => {
        const operatorButton = document.querySelector(
          `[data-value="${operator}"]`
        );

        operatorButton.disabled = false;
      });
    } else {
      currentInput += value;

      display.value = currentInput;

      if (operators.includes(value)) {
        button.disabled = false;
      }
    }
  });
});
