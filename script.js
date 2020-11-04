//DOM Selectors: 
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.item-header');

//global operators for the functions. 
let currentOperand = [];
let previousOperand = [];
let operator = ''; 


//button functionality
buttons.forEach(button => button.addEventListener('click', function(event){
  let target = button.innerHTML;
  
  //for operations
  //11-3-20 currently excludes operations with the percentages or positive or negative numbers. 
  //functions are not tied in just yet
  switch(target){
    case "AC": 
      allClear(); 
      break; 
    case "+": 
    case "-":
    case "÷":
    case "X":
      operator = target;
      previousOperand = currentOperand; 
      currentOperand = []; 
      console.log(operator + " is the operator and " +  previousOperand.join('') + " is the now the stored number. The current number is: " + currentOperand);               
      break;
    case "=": 
      
  }
  
  
  //limiter: 
  if(currentOperand.length < 10){
    if(target === "AC" || target === "+" ||target === "-" ||target === "X" ||target === "÷"  || target === "="){
      updateDisplay();
    }else{
      updateDisplay(target);
    }
  }
  
  //checking button press
  console.log("You Pressed: " + target + " ");
}));


//updates display, regulated by limiter inside of event listener to 10 char
function updateDisplay(target){
  currentOperand.push(target); 
  display.textContent = currentOperand.join('').toString();
}


//mathematical functions: all use the parse method to be able to convert string from array conversion to the integer
function add(currentOperand, previousOperand){
  return parseInt(currentOperand.join('')) + parseInt(previousOperand.join(''));
}

function subtract(currentOperand, previousOperand){
  return parseInt(currentOperand.join('')) - parseInt(previousOperand.join(''));
}

function multiply(currentOperand, previousOperand){
  return parseInt(currentOperand.join('')) * parseInt(previousOperand.join(''));
}

//clearing all variables. 
function allClear(){
  currentOperand = [];
  previousOperand = [];
  operator = '';
  console.log("cleared variables");
}