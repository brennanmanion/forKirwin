let userInput = 112298;

let userInputArray = userInput.toString().split('');

const singleDigits = {
    '0': '',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
}

const teenDigits = {
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen'
}

const tenMultipleDigits = {
    '1': 'ten',
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety'
}

const magnitude = {
    '2': 'hundred',
    '3': 'thousand',
    '4': 'thousand',
    '5': 'thousand',
    '6': 'million',
    '7': 'million',
    '8': 'million',
    '9': 'billion',
    '10': 'billion',
    '11': 'billion',
    '12': 'trillion'
}

let returnString = '';
let returnArray = [];
// The partial array is to test a different method,
// you will see it being used with returnArray
// it is equavalent to the returnString method
let partialArray = [];
let partialString = '';
while(userInputArray.length > 0){
    let userInputArrayLength = userInputArray.length;
    if(userInputArrayLength % 3 === 0){
        // this is a 'hundred' number
        partialArray = [userInputArray.shift()]
        partialString = partialArray.join('');
        if(partialString==='0'){
            returnString += singleDigits[partialString];
            returnArray.push(singleDigits[partialString]);
        }
        else{
            returnString += singleDigits[partialString] + ' hundred ';
            returnArray.push(singleDigits[partialString],'hundred');
        }   
    }
    else if(userInputArrayLength % 3 === 1){
        // this is a 'single digit' number
        partialArray = [userInputArray.shift()]
        partialString = partialArray.join('');
        if(partialString==='0'){
            returnString += singleDigits[partialString];
            returnArray.push(singleDigits[partialString]);
        }
        else{
            returnString += singleDigits[partialString] + ' ';
            returnArray.push(singleDigits[partialString]);
        }  
    }
    else if(userInputArrayLength % 3 === 2){
        // this is a 'teen' or 'ten multiple' number
        partialArray = [userInputArray.shift(),userInputArray.shift()]
        partialString = partialArray.join('');
        if(parseInt(partialString)<=19){
            if(parseInt(partialArray)===0){
                returnString += singleDigits[partialArray.pop()] + ' ';    
                returnArray.push(singleDigits[partialArray.pop()]);
            }
            else{
                returnString += teenDigits[partialString] + ' ';
                returnArray.push(teenDigits[partialString]);
            }            
        }
        else{            
            const partialArrayCopy = [...partialArray];
            // returnArray.push(tenMultipleDigits[partialArray.shift()],singleDigits[partialArray.shift()])
            returnString += tenMultipleDigits[partialArray.shift()] + ' ';            
            returnString += singleDigits[partialArray.shift()] + ' ';
            returnArray.push(tenMultipleDigits[partialArrayCopy.shift()],singleDigits[partialArrayCopy.shift()])
        }
    }
    if((userInputArray.length % 3 ===0) && (userInput.toString().split('').length > userInputArray.length) && (userInputArray.length > 1)){
        returnString += magnitude[String(userInputArray.length)] + ' ';
        returnArray.push(magnitude[String(userInputArray.length)]);
    }        
}
console.log(returnString);
console.log(returnArray.join(' '));