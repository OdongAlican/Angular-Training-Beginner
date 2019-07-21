
let result = document.getElementById('result').value 
result = 0

let valAdd = 0
let valDivide = 0
let valMultiply = 0
let valMinus = 0

let plusButton
let minusButton
let divideButton
let multiplyButton
let re;

let regex = /\./; 

const buttonOne = document.getElementById('one').addEventListener('click', ()=>{
    if(plusButton || minusButton || multiplyButton || divideButton){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        divideButton = false
        multiplyButton = false
        
        const res = document.getElementById('result').value
        
        if(res==0){
            document.getElementById('result').value = 1
        }
        else{
            let val = res + '' + 1
            document.getElementById('result').value = val;
        }
}
    else{
        const res = document.getElementById('result').value
        console.log(res)
        if(res==0){
            document.getElementById('result').value = 1
        }
        else if (!regex.test(res)){
            let val = res + '' + 1
            document.getElementById('result').value = val;
        }
        else{
            let val = res + '' + 1
            document.getElementById('result').value = val;
        }      

}
})

const buttonTwo = document.getElementById('two').addEventListener('click', ()=>{
    if(plusButton || minusButton || multiplyButton || divideButton){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        divideButton = false
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
        if(res==0){
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
    if(plusButton || minusButton || multiplyButton || divideButton){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        divideButton = false
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
        if(!regex.test(res)){
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
    if(plusButton || minusButton || multiplyButton || divideButton){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        divideButton = false
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
        if(!regex.test(res)){
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
    if(plusButton || minusButton || multiplyButton || divideButton){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        divideButton = false
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
        if(!regex.test(res)){
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
    if(plusButton || minusButton || multiplyButton || divideButton){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        divideButton = false
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
        if(!regex.test(res)){
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
    if(plusButton || minusButton || multiplyButton || divideButton){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
        divideButton = false
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
        if(!regex.test(res)){
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
    if(plusButton || minusButton || multiplyButton || divideButton){
        document.getElementById('result').value = ''; 
        plusButton = false
        minusButton = false
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
        if(!regex.test(res)){
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
    if(plusButton || minusButton || multiplyButton || divideButton){
            document.getElementById('result').value = ''; 
            plusButton = false
            minusButton = false
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
})

const buttonPlus = document.getElementById('plus').addEventListener('click', ()=>{
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
    if(res==''){
        document.getElementById('result').value = ''
    }
    else{
        let val = `${res}` + '.'
        document.getElementById('result').value = val;
    } 
})

const buttonClear = document.getElementById('clear').addEventListener('click', ()=>{
    document.getElementById('result').value = ''; 
})

const buttonEqual = document.getElementById('equal').addEventListener('click', ()=>{
const val2 = document.getElementById('result').value
    if(!(valAdd=='')){
        document.getElementById('result').value = Number(valAdd) + Number(val2)

    } 
    
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

const buttonZero = document.getElementById('zero').addEventListener('click', ()=>{ const res = document.getElementById('result').value
   
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
        if(!regex.test(res)){
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