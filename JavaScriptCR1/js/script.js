var num1=Number(prompt("Enter a number"));
var num2=Number(prompt("Enter another number"));

function  myAddition(num1,num2){
    var result=num1+num2;
    document.write(" 1. The result is: " + result + "<br>");
}
function mySubtraction(num1,num2){
    var result=num1-num2;
    document.write(" 2. The result is: " + result + "<br>");
}
function myMultiplication(num1,num2){
    var result=num1*num2;
    document.write(" 3. The result is: " + result + "<br>");
}
function myDivision(num1,num2){
    var result=num1/num2;
    document.write(" 4. The result is: " + result + "<br>");
}


myAddition(num1,num2);
mySubtraction(num1,num2);
myMultiplication(num1,num2);
myDivision(num1,num2);
