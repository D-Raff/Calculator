const numButtons = document.querySelectorAll('[data-number]')
const actionButtons = document.querySelectorAll('[data-action]')
const equalsBtn = document.querySelector('[data-equals]')
const clearBtn = document.querySelector('[data-clear]')
const delBtn = document.querySelector('[data-delete]')
const Current = document.querySelector('[data-current]')
const Result = document.querySelector('[data-res]')

function appendToDisplay() {
}

numButtons.addEventListener('click', appendToDisplay)