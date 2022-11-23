let numberZero = document.getElementById('numb0');
let numberOne = document.getElementById('numb1');
let numberTwo = document.getElementById('numb2');
let numberThree = document.getElementById('numb3');
let numberFour = document.getElementById('numb4');
let numberFive = document.getElementById('numb5');
let numberSix = document.getElementById('numb6');
let numberSeven = document.getElementById('numb7');
let numberEight = document.getElementById('numb8');
let numberNine = document.getElementById('numb9');

let itAdd = document.getElementById('add')
let itMinus = document.getElementById('minus')
let itMultiply = document.getElementById('multiply')
let itDivide = document.getElementById('divide')

let itClear = document.getElementById('clear')
let itEqual = document.getElementById('equal')

let itDecimal = document.getElementById('decimal');
let display = document.getElementById('display');

// number buttons
numberOne.addEventListener('click', () => {
    let first = numberOne.innerText;
    display.value += first;
})

numberTwo.addEventListener('click',() => {
    let second = numberTwo.innerText;
    display.value += second;
})

numberThree.addEventListener('click',() => {
    let third = numberThree.innerText;
    display.value += third;
})

numberFour.addEventListener('click',() => {
    let fourth = numberFour.innerText;
    display.value += fourth;
})

numberFive.addEventListener('click',() => {
    let fifth = numberFive.innerText;
    display.value += fifth;
})

numberSix.addEventListener('click',() => {
    let sixth = numberSix.innerText;
    display.value += sixth;
})

numberSeven.addEventListener('click',() => {
    let seventh = numberSeven.innerText;
    display.value += seventh;
})

numberEight.addEventListener('click',() => {
    let eighth = numberEight.innerText;
    display.value += eighth;
})

numberNine.addEventListener('click',() => {
    let ninth = numberNine.innerText;
    display.value += ninth;
})

numberZero.addEventListener('click',() => {
    let zero = numberZero.innerText;
    display.value += zero;
})

// operator buttons
itAdd.addEventListener('click',() => {
    let add = itAdd.textContent;
    display.value += add;
})

itMinus.addEventListener('click',() =>{
    let minus = itMinus.textContent;
    display.value += minus;
})

itDivide.addEventListener('click',() =>{
    let divide = itDivide.textContent;
    display.value += divide;
})

itMultiply.addEventListener('click',() => {
    let multiply = itMultiply.textContent;
    display.value += multiply;
})

// decimal button
itDecimal.addEventListener('click',() => {
    let decimal = itDecimal.innerText;
    display.value += '.';
})
 
// clear button
itClear.addEventListener('click',() => {
    let clear = itClear.textContent;
    display.value = '';
})

// equal button
itEqual.addEventListener('click',() => {
    display.value = eval(display.value);
})