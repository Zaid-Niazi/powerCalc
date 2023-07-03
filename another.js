function displayNumbers(event) {

    let text = event.target.textContent;

    if(text !== '+' && text !== '-' && text !== 'x' && text !== '/' && text !== '=') {
        displayArray.push(text);
        buffer.push(text);
        display.textContent = displayArray.join('');
    } else if(text === '+' || text === '-' || text === 'x' || text === '/') {
        let index = Number(displayArray[displayArray.length-1])
        if(displayArray.length < 3){
            if(!isNaN(index)){
                displayArray.push(text);  
                if(buffer.length !== 0) {
                    bufferArray.push(buffer.join(''));
                    bufferArray.push(text);
                    buffer = [];
                }
                display.textContent = displayArray.join('');
            } else if(text === '=') {
                if(buffer.length !== 0) {
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
        }else{

            if(!isNaN(index)){
                displayArray.push(text);  
                if(buffer.length !== 0) {
                    bufferArray.push(buffer.join(''));
                    bufferArray.push(text);
                    buffer = [];
                }
              
                if(buffer.length !== 0) {
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
}