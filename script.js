//global variables: 
displayValue = 0;
value1 = 0;
value2 = 0;


//mathmatecal functions: 
//add:
function add(x,y){
    return x + y; 
}
//subtract 
function subtract(x,y){
    return x-y;
}
//multiply
function multiply(x,y){
    return x*y
}
//divide 
function divide(x,y){
    return x % y
};
//OPERATION! OPERATION! MORE FRUSTRATING THAN A PILLOW FIGHT!
function operation(operator, value1, value2){
    displayValue = operator(value1, value2);
    return displayValue;
}






