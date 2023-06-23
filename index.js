// DOM selectors
const container = document.querySelector('.container')
const display = document.createElement('div')
const numPad = document.createElement('div')
const sidePad = document.createElement('div')

display.className='display'
numPad.className = 'numPad'
sidePad.className='sidePad'

const displayArray = []

display.textContent = displayArray

container.appendChild(display)
container.appendChild(numPad)
container.appendChild(sidePad)

for(let i =9; i>=0; i--){
    let numButtons = document.createElement('div')
    numButtons.className='numButtons' + " c" +i
    numButtons.textContent=i
    numButtons.addEventListener('click', displayNumbers)
    numPad.appendChild(numButtons)
}


for(let i =0; i<5; i++){
    let sideButtons = document.createElement('div')
    sideButtons.className='sideButtons' +' b' +i
    sideButtons.addEventListener('click', displayOperators)
    sidePad.appendChild(sideButtons)
  
}

//Operators

const add = document.querySelector('.b0')
const sub = document.querySelector('.b1')
const mul = document.querySelector('.b2')
const div = document.querySelector('.b3')
const ent = document.querySelector('.b4')

add.textContent = "+"
sub.textContent = "-"
mul.textContent = "x"
div.textContent = "/"
ent.textContent = "="

// Functions

function displayNumbers(event){
    const text = event.target.textContent
    displayArray.push(text)
    display.textContent = displayArray.join('')
}

function displayOperators(event){
    const text = event.target.textContent

    if( text!== '='){
        displayArray.push(text)
        display.textContent = displayArray.join('')
    }
   
}


function operate(num1, op, num2){

    switch (op){
     case  '+':
     return num1 + num2
     break;  
   
     case  '-':
     return num1 - num2
     break;  
   
     case  '*':
     return num1 * num2
     break;  
   
     case  '/':
     return num1 / num2
     break;    
   
    }
   }
   
   let num1 = 7
   let num2 = 2
   let op = '+'
   
    operate(num1, op, num2)
   