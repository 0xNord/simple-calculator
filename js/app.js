const parent = document.getElementById('btns') // buttons container
const parentNumbers = document.getElementsByClassName('calculator__buttons-numbers')
const parentOperators = document.querySelector('.calculator__buttons-operators')

const turnOnBtn = document.getElementById('turnOnBtn'); // turnOnBtn
const comma = document.getElementById('comma');
const resultBtn = document.getElementById('result');

const display = document.getElementById('display'); // display

// variables
let onlyOneComma = true;
let operator = '';
let value1 = 0
let value2 = 0

// styling buttons by apply css class
parent.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains("calculator__buttons-button")) {
        // type numbers on display
        if (e.target.classList.contains("number")){ display.textContent += e.target.textContent; } // show number on display
        // add style class
        e.target.classList.toggle('active');
    }
})
parent.addEventListener('mouseup', (e) => {
    // add style class
    if (e.target.classList.contains("calculator__buttons-button")) { e.target.classList.toggle('active');}
})
// turOnBtn Listener
turnOnBtn.addEventListener('mouseup',(e) => {
    clearDisplay() // clear display
    onlyOneComma = true
})
// comma Listener
comma.addEventListener('mousedown', (e) => {
    console.log(onlyOneComma)
    // added comma if already display some numbers
    if(onlyOneComma && (display.textContent !== '')){ display.textContent += e.target.textContent; onlyOneComma = false; }
})
//==== operator
parentOperators.addEventListener('mouseup', (e) => {
    onlyOneComma = true; // unblock comma
    value1 = display.textContent
    operator = e.target.textContent
    clearDisplay()
})
//==== calc function
function calc(o, x, y){
    console.log(o,x,'|',y)
    switch(o){
        case '+': return Number(x) + Number(y)
        case '-': return Number(x) - Number(y)
        case '/': return Number(x) / Number(y)
        case '*': return Number(x) * Number(y)
        default: console.log('hm...')
    }
}
//==== resultBtn
resultBtn.addEventListener('mouseup', (e) => {
    value2 = display.textContent
    // render result
    display.textContent = calc(operator, value1, value2)
})
//==== clear display
function clearDisplay(){
    display.textContent = ""
}