console.log("Hello World of Node JS"); 

function displayResult(result){
    console.log("Sum of two integers is "+result);
}

function sum(num1, num2, mycallback){
    let result = num1 + num2;
    mycallback(result) ;
}

sum(15,78,displayResult);