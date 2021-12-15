var btnOne = document.getElementById('one');
var btnTwo = document.getElementById('two');
var btnThree = document.getElementById('three');
var btnFour = document.getElementById('four');
var btnFive = document.getElementById('five');
var btnSix = document.getElementById('six');
var btnSeven = document.getElementById('seven');
var btnSeven = document.getElementById('eight');
var btnSeven = document.getElementById('nine');
var btnSeven = document.getElementById('zero');

var btnDecimal = document.getElementById('Decimal');
var btnClear = document.getElementById('Clear');
var btnBackspace = document.getElementById('backspace');
var displayValElement = document.getElementById('calc-displayVal');

var displayVal = '0';
var pendingVal;
var evalStringArray = [];

var calcNumBtns = document.getElementsByClassName('btn-num');
var calcOperatorBtns = document.getElementsByClassName('btn-operator');
var calcPercentage = document.getElementById('percent');

var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;

    if (displayVal === '0')
        displayVal = '';
    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+')

            break;

        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-')
            break;

        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*')
            break;
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/')
            break;

        case '%':
            displayVal = displayVal / 100;
            displayValElement.innerText = displayVal;
            break;

        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];
        default:
            break;
    }
}

for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

for (let i = 0; i < calcOperatorBtns.length; i++) {
    calcOperatorBtns[i].addEventListener('click', performOperation, false)
}

btnClear.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = []
    displayValElement.innerHTML = displayVal;
}

btnBackspace.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

    if (displayVal === ' ')
        displayVal = '0';

    displayValElement.innerText = displayVal;
}

btnDecimal.onclick = () => {
    if (!displayVal.includes('.'))
        displayVal += '.';
    displayValElement.innerHTML = displayVal;
}






