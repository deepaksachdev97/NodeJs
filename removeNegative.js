const mixedNumbers = [-10,50,-78,150,147,-80];

function removeNegative(mixedNumbers, checkNumber){

    let positiveNumbers = [];

    for(const number of mixedNumbers){
        if(checkNumber(number)){
            positiveNumbers.push(number);
        }
    }
    return positiveNumbers;

}

console.log("Only Positives ",removeNegative(mixedNumbers, (x) => x>=0));

console.log("Only Negatives ", removeNegative(mixedNumbers, (x) => x<=0));