// DOM selectors
const container = document.querySelector('.container');

const secondDisplay = document.createElement('div');
const display = document.createElement('div');
const numPad = document.createElement('div');
const sidePad = document.createElement('div');

secondDisplay.className = 'secondDisplay';
display.className = 'display';
numPad.className = 'numPad';
sidePad.className = 'sidePad';

display.textContent = 0;

container.appendChild(secondDisplay);
container.appendChild(display);
container.appendChild(numPad);
container.appendChild(sidePad);

// numButtons
for (let i = 9; i >= 0; i--) {
  let numButtons = document.createElement('div');
  numButtons.className = 'numButtons' + ' c' + i;
  numButtons.textContent = i;
  numButtons.addEventListener('click', displayNumbers);
  numPad.appendChild(numButtons);
}

// sidePad Buttons
for (let i = 0; i < 5; i++) {
  let sideButtons = document.createElement('div');
  sideButtons.className = 'sideButtons' + ' b' + i;
  sideButtons.addEventListener('click', displayNumbers);
  sidePad.appendChild(sideButtons);
}

// Operators
const add = document.querySelector('.b0');
const sub = document.querySelector('.b1');
const mul = document.querySelector('.b2');
const div = document.querySelector('.b3');
const ent = document.querySelector('.b4');

add.textContent = '+';
sub.textContent = '-';
mul.textContent = 'x';
div.textContent = '/';
ent.textContent = '=';


// Arrays
let displayArray = [];
let buffer = [];
let bufferArray = [];
let secondDisplayArray = [];

// Functions
function displayNumbers(event) {
  let text = event.target.textContent;

  if (text !== '+' && text !== '-' && text !== 'x' && text !== '/' && text !== '=') {
    displayArray.push(text);
    buffer.push(text);
    display.textContent = displayArray.join('');
  } 
  
  else if (text === '+' || text === '-' || text === 'x' || text === '/') {
    let index = Number(displayArray[displayArray.length - 1]);
    if (displayArray.length < 3) {
      if (!isNaN(index)) {
        displayArray.push(text);

        if (buffer.length !== 0) {
          bufferArray.push(buffer.join(''));
          bufferArray.push(text);
          buffer = [];

          display.textContent = displayArray.join('');
        }
      }
    } 
    
    else if (displayArray.length >= 3) {
      if (!isNaN(index)) {
        if (buffer.length !== 0) {
          bufferArray.push(buffer.join(''));
          buffer = [];
        }
        secondDisplay.textContent = displayArray.join('');

        let num1 = Number(bufferArray[0]);
        let op = bufferArray[1];
        let num2 = Number(bufferArray[2]);

        operate(bufferArray);
        bufferArray = [];
      }
    }
  } 
  
  else if (text === '=') {
    if (buffer.length !== 0) {
      bufferArray.push(buffer.join(''));
      buffer = [];
    }
    secondDisplay.textContent = displayArray.join('');
    console.log(buffer);

    let num1 = Number(bufferArray[0]);
    let op = bufferArray[1];
    let num2 = Number(bufferArray[2]);

    operate(bufferArray);
    bufferArray = [];
  } 
  
  else if (buffer.length === 0) {
    display.textContent = 0;
  }
}

function operate(arr) {
  let final;

  if (arr.find(x => x === '+') === '+') {
    final = arr.reduce((acc, item) => {
      if (typeof Number(item) == 'number') {
        !isNaN(item) ? (acc += Number(item)) : null;
        return acc;
      }
    }, 0);
  } else if (arr.find(x => x === '-') === '-') {
    final = arr.reduce((acc, item) => {
      if (typeof Number(item) == 'number') {
        !isNaN(item) ? (acc -= Number(item)) : null;
        return acc;
      }
    });
  } else if (arr.find(x => x === 'x') === 'x') {
    final = arr.reduce((acc, item) => {
      if (typeof Number(item) == 'number') {
        !isNaN(item) ? (acc *= Number(item)) : null;
        return acc;
      }
    });
  } else if (arr.find(x => x === '/') === '/') {
    final = arr.reduce((acc, item) => {
      if (typeof Number(item) == 'number') {
        !isNaN(item) ? (acc /= Number(item)) : null;
        return acc;
      }
    });
  }

  displayArray = [final];
  buffer = [final];
  display.textContent = buffer;
}
