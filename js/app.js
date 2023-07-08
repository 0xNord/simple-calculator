const parent = document.getElementById('btns') // buttons container
const parentNumbers = document.getElementsByClassName('calculator__buttons-numbers')

const turnOnBtn = document.getElementById('turnOnBtn'); // turnOnBtn
const comma = document.getElementById('comma');

const display = document.getElementById('display'); // display

// variables
let onlyOneComma = true;


// styling buttons by apply css class
parent.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains("calculator__buttons-button")) {
        // type numbers on display
        if (e.target.classList.contains("number")){display.textContent += e.target.textContent}
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
    display.textContent = "" // clear display
    onlyOneComma = true
})
// comma Listener
comma.addEventListener('mousedown', (e) => {
    // added comma if already display some numbers
    if(onlyOneComma && (display.textContent !== '')){ display.textContent += e.target.textContent; onlyOneComma = false; }
})