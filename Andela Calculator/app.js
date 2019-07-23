//getting the value of an input HTML element by its ID, then assigning it to a variable called result.
let result = document.getElementById('result').value 

//assigning zero to the variable result.
result = 0

//Declaring variables (valAdd, valDivide, valMultiply, valMinus)and assigning them variables 0
let valAdd = 0
let valDivide = 0
let valMultiply = 0
let valMinus = 0

//Declaring variables 
let plusButton
let minusButton
let divideButton
let multiplyButton
let equalSign


// Declaring a variable called regex and assigning a regular expression that checks for the presence of a full-stop
let regex = /\./; 

/*
    geting an HTML element by its assigned id and listening to actions made on this particular element, which is a button in this case. And the button is 
    listening for any clicks made on it. if a click is made, a function is executed.
*/

const buttonOne = document.getElementById('one').addEventListener('click', ()=>{

    /* the if statement is used to check for conditions. if the conditions within the parentesis are met, 
    the the code block within the if statement is executed.
    here we are checking if any of the Plus, minus, multiply or division button is clicked.
    if they any is clicked, the code block inside the if statement is executed. if any of the buttons is not clicked, the 
    code in the else section is executed
    */

    if(plusButton || minusButton || multiplyButton || divideButton || equalSign){

        // this part below helps to remove everything in the input field after someone clicks one.
        document.getElementById('result').value = ''; 

        /* 
         this section is used to set the Add, Substract, multiply and divide buttons to false after someone has clicked after
         the digit one after previously clicking Add or Minus or Divide or multiply.
        */
        plusButton = false
        minusButton = false
        divideButton = false
        multiplyButton = false
        equalSign = false
        

        /*
            Assigning the value in the input field to a variable called res
        
        */
        const res = document.getElementById('result').value
        

        /*
            checking if the current value in the input field is 0. then the code in the if statement is executed. if
            the value in the input field is not equal to zero, the else part of the code is executed
        */
        if(res==0){
            document.getElementById('result').value = 1
        }
        else{
            let val = res + '' + 1
            document.getElementById('result').value = val;
        }
}

    /*      This section of the code is executed if any of the Add, subtract, Multiply or Divide button has not been clicked yet.
            
        */

    else{

        const res = document.getElementById('result').value

        /*
            Checking if the current value in the input field is 0 and does not have a decimal point. 
            Then the code in the if statement is executed. if the value in the input field has a decimal point, the elseif part of the code is executed.
            the else statement is executed when the user has entered a number between one and nine first.

        */

        if(!regex.test(res)&& res==0){
            // here we get the inputfield with its Id and place one in it
            document.getElementById('result').value = 1
        }
        else if (regex.test(res)){
            //we test if there is a decimal place in the input field. if there exists a decimal place, then we concatinate one
            let val = res + '' + 1
            //We the place the new value to the input field
            document.getElementById('result').value = val;
        }
        else{
            //we test if the input field has a number that is not zero. we then concatinate one to the value in the input field.
            // the new value 
            let val = res + '' + 1
            document.getElementById('result').value = val;
        }      

    }
})

const buttonTwo = document.getElementById('two').addEventListener('click', ()=>{
    if(plusButton || minusButton || multiplyButton || divideButton || equalSign){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        divideButton = false
        equalSign = false
        multiplyButton = false
        
        const res = document.getElementById('result').value
        if(res==0){
            document.getElementById('result').value = 2
        }
        else{
            let val = res + '' + 2
            document.getElementById('result').value = val;
        }
}
    else{
        const res = document.getElementById('result').value
        if(!regex.test(res)&& res==0){
            document.getElementById('result').value = 2
        }
        else if (regex.test(res)){
            let val = res + '' + 2
            document.getElementById('result').value = val;
        }
        else{
            let val = res + '' + 2
            document.getElementById('result').value = val;
        }      

    }

})

const buttonThree = document.getElementById('three').addEventListener('click', ()=>{
    if(plusButton || minusButton || multiplyButton || divideButton || equalSign){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        divideButton = false
        equalSign = false
        multiplyButton = false
        
        const res = document.getElementById('result').value
        if(res==0){
            document.getElementById('result').value = 3
        }
        else{
            let val = res + '' + 3
            document.getElementById('result').value = val;
        }
}
    else{
        const res = document.getElementById('result').value
        if(!regex.test(res)&& res==0){
            document.getElementById('result').value = 3
        }
        else if (regex.test(res)){
            let val = res + '' + 3
            document.getElementById('result').value = val;
        }
        else{
            let val = res + '' + 3
            document.getElementById('result').value = val;
        }      

}
})

const buttonFour = document.getElementById('four').addEventListener('click', ()=>{
    if(plusButton || minusButton || multiplyButton || divideButton || equalSign){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        divideButton = false
        equalSign = false
        multiplyButton = false
        
        const res = document.getElementById('result').value
        if(res==0){
            document.getElementById('result').value = 4
        }
        else{
            let val = res + '' + 4
            document.getElementById('result').value = val;
        }
}
    else{
        const res = document.getElementById('result').value
        if(!regex.test(res)&& res==0){
            document.getElementById('result').value = 4
        }
        else if (regex.test(res)){
            let val = res + '' + 4
            document.getElementById('result').value = val;
        }
        else{
            let val = res + '' + 4
            document.getElementById('result').value = val;
        }      

}
})

const buttonFive = document.getElementById('five').addEventListener('click', ()=>{
    if(plusButton || minusButton || multiplyButton || divideButton || equalSign){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        divideButton = false
        equalSign = false
        multiplyButton = false
        
        const res = document.getElementById('result').value
        if(res==0){
            document.getElementById('result').value = 5
        }
        else{
            let val = res + '' + 5
            document.getElementById('result').value = val;
        }
}
    else{
        const res = document.getElementById('result').value
        if(!regex.test(res)&& res==0){
            document.getElementById('result').value = 5
        }
        else if (regex.test(res)){
            let val = res + '' + 5
            document.getElementById('result').value = val;
        }
        else{
            let val = res + '' + 5
            document.getElementById('result').value = val;
        }      

}
})

const buttonSix = document.getElementById('six').addEventListener('click', ()=>{
    if(plusButton || minusButton || multiplyButton || divideButton || equalSign){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        divideButton = false
        equalSign = false
        multiplyButton = false
        
        const res = document.getElementById('result').value
        if(res==0){
            document.getElementById('result').value = 6
        }
        else{
            let val = res + '' + 6
            document.getElementById('result').value = val;
        }
}
    else{
        const res = document.getElementById('result').value
        if(!regex.test(res)&& res==0){
            document.getElementById('result').value = 6
        }
        else if (regex.test(res)){
            let val = res + '' + 6
            document.getElementById('result').value = val;
        }
        else{
            let val = res + '' + 6
            document.getElementById('result').value = val;
        }      

    }
})

const buttonSeven = document.getElementById('seven').addEventListener('click', ()=>{
    if(plusButton || minusButton || multiplyButton || divideButton || equalSign){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        divideButton = false
        equalSign = false
        multiplyButton = false
        
        const res = document.getElementById('result').value
        if(res==0){
            document.getElementById('result').value = 7
        }
        else{
            let val = res + '' + 7
            document.getElementById('result').value = val;
        }
}
    else{
        const res = document.getElementById('result').value
        if(!regex.test(res)&& res==0){
            document.getElementById('result').value = 7
        }
        else if (regex.test(res)){
            let val = res + '' + 7
            document.getElementById('result').value = val;
        }
        else{
            let val = res + '' + 7
            document.getElementById('result').value = val;
        }      

}
})

const buttonEight = document.getElementById('eight').addEventListener('click', ()=>{
    if(plusButton || minusButton || multiplyButton || divideButton || equalSign){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        equalSign = false
        divideButton = false
        multiplyButton = false

        const res = document.getElementById('result').value
        if(res==0){
            document.getElementById('result').value = 8
        }
        else{
            let val = res + '' + 8
            document.getElementById('result').value = val;
        }
}
    else{
        const res = document.getElementById('result').value
        if(!regex.test(res)&& res==0){
            document.getElementById('result').value = 8
        }
        else if (regex.test(res)){
            let val = res + '' + 8
            document.getElementById('result').value = val;
        }
        else{
            let val = res + '' + 8
            document.getElementById('result').value = val;
        }      

}

})

const buttonNine = document.getElementById('nine').addEventListener('click', ()=>{
    if(plusButton || minusButton || multiplyButton || divideButton || equalSign){
            document.getElementById('result').value = ''; 
            plusButton = false
            minusButton = false
            equalSign = false
            divideButton = false
            multiplyButton = false
            
            const res = document.getElementById('result').value
            if(!regex.test(res)){
                document.getElementById('result').value = 9
            }
            else if (regex.test(res)){
                let val = res + '' + 9
                document.getElementById('result').value = val;
            }
            else{
                let val = res + '' + 9
                document.getElementById('result').value = val;
            }
    }
        else{
            const res = document.getElementById('result').value
            if(!regex.test(res)&& res==0){
                document.getElementById('result').value = 9
            }
            else if (regex.test(res)){
                let val = res + '' + 9
                document.getElementById('result').value = val;
            }
            else{
                let val = res + '' + 9
                document.getElementById('result').value = val;
            }      

    }
})

const buttonPlus = document.getElementById('plus').addEventListener('click', ()=>{
    /* 
     After the plus button is clicked, the current value in the input field is stored in a variable called valAdd
     a variable called plusButton is assigned a boolean true.
     */
    valAdd = document.getElementById('result').value
    plusButton = true
})

const buttonMinus = document.getElementById('minus').addEventListener('click', ()=>{
    valMinus = document.getElementById('result').value
    minusButton = true
})

const buttonDivide = document.getElementById('divide').addEventListener('click', ()=>{
    valDivide = document.getElementById('result').value
    divideButton = true
})

const buttonMultiplication = document.getElementById('multiplication').addEventListener('click', ()=>{
    valMultiply = document.getElementById('result').value
    multiplyButton = true
})

const buttonDecimal = document.getElementById('decimal').addEventListener('click', ()=>{
    const res = document.getElementById('result').value

    // checking if the input field is empty the the code below is executed
    if(res==''){
        document.getElementById('result').value = ''
    }


    /*
        if the decimal point is clicked, if input field has a decimal place or the Add, substract, multiply or divide button has been clicked
        then we just replace the current value of the input field with what is currently there in the field
    */
    else if (regex.test(res) || plusButton || minusButton || multiplyButton || divideButton){
        document.getElementById('result').value = res;
    }

    /*
    if the input has any number, it will concatinate a decimal place.
    */
    else{
        let val = `${res}` + '.'
        document.getElementById('result').value = val;
    } 
})

const buttonClear = document.getElementById('clear').addEventListener('click', ()=>{
    /*
    This will clear the input field and assign zero to all the variables
    */
    document.getElementById('result').value = ''; 
    valAdd = 0
    valDivide = 0
    valMultiply = 0
    valMinus = 0
})

const buttonEqual = document.getElementById('equal').addEventListener('click', ()=>{
const val2 = document.getElementById('result').value
     equalSign = true

     /*
     Here we are adding the method Number() to convert the values into numbers.
     If we do it without converting them to type number, it will just concatinate the two numbers rather than add them.
     We have to check that the variables have content before we can perform the arithmatics
     */
    if(!(valAdd=='')){
        document.getElementById('result').value = Number(valAdd) + Number(val2)

    } 
    

    /*
    For the case of substraction, multiplication and division, there is no need to use the 
    Number() function. the arithemetics are just performed minus converting them in to numbers 
    */
    if(!(valMinus=='')){
        document.getElementById('result').value = valMinus - val2
    }

    if(!(valMultiply=='')){
        document.getElementById('result').value = valMultiply * val2
    }

    if(!(valDivide=='')){
        document.getElementById('result').value = valDivide / val2
    }
})

const buttonZero = document.getElementById('zero').addEventListener('click', ()=>{ 
    const res = document.getElementById('result').value
   
    if(plusButton || minusButton || multiplyButton || divideButton){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        divideButton = false
        multiplyButton = false

        const res = document.getElementById('result').value
        if(res==0){
            document.getElementById('result').value = 0
        }
        else{
            let val = res + '' + 0
            document.getElementById('result').value = val;
        }
}
    else{
        const res = document.getElementById('result').value
        if(!regex.test(res)&& res==0){
            document.getElementById('result').value = 0
        }
        else if (regex.test(res)){
            let val = res + '' + 0
            document.getElementById('result').value = val;
        }
        else{
            let val = res + '' + 0
            document.getElementById('result').value = val;
        }      

}

   
})