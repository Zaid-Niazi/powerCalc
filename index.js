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

for(let i =0; i<2; i++){
    let extraButtons = document.createElement('div');
    extraButtons.className = 'eb' + ' d' + i;
    extraButtons.addEventListener('click', displayNumbers);
    numPad.appendChild(extraButtons);
}

const dot = document.querySelector('.d0');
const clr = document.querySelector('.d1');

dot.textContent = '.';
clr.textContent = 'CLR';
clr.addEventListener('click', clear)

function clear(){
    displayArray=[]
    secondDisplayArray=[]
    buffer=[]
    bufferArray=[]
    display.textContent=displayArray
    secondDisplay.textContent=secondDisplayArray
    opArray=[]
}

// sidePad Buttons
for (let i = 0; i < 5; i++) {
    let sideButtons = document.createElement('div');
    sideButtons.className = 'sideButtons' + ' b' + i;
    sideButtons.addEventListener('click', displayOperator);
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
let opArray = []

// Functions
function displayNumbers(event){
    let text = event.target.textContent
    displayArray.push(text)
    display.textContent = displayArray.join('')
    buffer.push(text)
}

function displayOperator(event){
    let text = event.target.textContent
    if(text !== '='){

      opArray.push(text)
      console.log(opArray)
      if(opArray.length === 1){
      midOperations(text)     
      }
      else if(opArray.length >1){
        midOperations(opArray[opArray.length-2])
      }
    }

    else if(text === '='){
        if (bufferArray.length >= 1){
            if (typeof bufferArray[bufferArray.length-1] !== 'number'){
                bufferArray.push(buffer.join(''))
                bufferArray.push(opArray[opArray.length-1])
                displayArray.push(opArray[opArray.length-1]) 
                display.textContent = displayArray.join('')
            }
            else if (typeof bufferArray[bufferArray.length-1] === 'number'){
                bufferArray.push(opArray[opArray.length-1])            
                bufferArray.push(buffer.join(''))
                displayArray.push(text) 
                display.textContent = displayArray.join('')
    
    
            }



        if(bufferArray.length >= 3){
            let num1 = Number(bufferArray[0])
            let op = (bufferArray[1])
            let num2 = Number(bufferArray[2])
            console.log(num1, op, num2)
        
            if(typeof Number(num2) === 'number'){
                equals (num1, op, num2)
            }
        }
    }

}




function midOperations(text){


  if(buffer.length >=1){
    display.textContent = displayArray.join('')

       if (bufferArray.length >= 1){
        if (typeof bufferArray[bufferArray.length-1] !== 'number'){
            bufferArray.push(buffer.join(''))
            bufferArray.push(text)
            displayArray.push(text) 
            display.textContent = displayArray.join('')
        }
        else if (typeof bufferArray[bufferArray.length-1] === 'number'){
            bufferArray.push(text)            
            bufferArray.push(buffer.join(''))
            displayArray.push(text) 
            display.textContent = displayArray.join('')


        }
       }else{
        bufferArray.push(buffer.join(''))
        bufferArray.push(text)
        displayArray.push(text) 
        display.textContent = displayArray.join('')

    }

   
    console.log(bufferArray)
    buffer =[]
    
    
}else{

    if (bufferArray.length >= 1){
        if (typeof bufferArray[bufferArray.length-1] !== 'number'){
            bufferArray[bufferArray.length-1] = text
            bufferArray.push(text)
            displayArray.push(text)
            display.textContent = displayArray.join()
        }

        }
       
}







// first calc. works on the basis of operator that is in middle of two numbers, After that,
// op present at last decide the operations.


if(bufferArray.length >= 3){
    let num1 = Number(bufferArray[0])
    let op = (bufferArray[1])
    let num2 = Number(bufferArray[2])
    console.log(num1, op, num2)

    if(typeof Number(num2) === 'number'){
        operate (num1, op, num2)
    }
}


}




function operate (num1, op, num2){
    let result;


   switch(op){

    case '+' :
    result = num1+num2
    break;

    case '-' :
    result = num1-num2
    break;
    

    case 'x' :
    result = num1*num2
    break;
   

    case '/' :
    result = num1/num2
    break;
    


   }



    displayArray = [result]
    buffer = []
    bufferArray=[result]
    displayArray.push(opArray[opArray.length-1])
    display.textContent = displayArray.join('')
    
}
}


function equals (num1, op, num2){
    let result;


   switch(op){

    case '+' :
    result = num1+num2
    break;

    case '-' :
    result = num1-num2
    break;
    

    case 'x' :
    result = num1*num2
    break;
   

    case '/' :
    result = num1/num2
    break;
    


   }



    displayArray = [result]
    buffer = []
    bufferArray=[result]
    display.textContent = displayArray.join('')
    
}
