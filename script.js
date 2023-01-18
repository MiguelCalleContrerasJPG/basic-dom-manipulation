const h1 = document.querySelector('h1');
const input1 = document.querySelector('#value1');
const input2 = document.querySelector('#value2');
const button = document.querySelector('#btnCalculate');
const paragraph = document.querySelector('#paragraph');
const form = document.querySelector('#form');
const scrollDiv = document.querySelector('#scrollDiv');

form.addEventListener('submit', calculate);

scrollDiv.addEventListener('scroll', myFunction);

/*button.addEventListener('click', function (event) {
    console.log(event.AT_TARGET);
    console.log(event.type);
    printMessage(input1.valueOf().value);
});*/



//button.addEventListener('click', calculate);
let x = 0;
function myFunction() {
    document.getElementById('demo').innerHTML = (x++).toString();
    
}

function onFocus(){
    console.log('It is on focus')
}

function printMessage(message){
    console.log(message);
}

function onInput(abc){
    console.log('Input value is changing')
}
function keyPress(){
    console.log('keyPress')
}

function calculate(event){
    //console.log(parseInt(input1.value )+ parseInt(input2.value));
    event.preventDefault();
    console.log(event)
    console.log(input1.value + input2.value);
    paragraph.innerText = 'The result is: ' + input1.value + input2.value;

}


