module.exports = function binaryAdd(num1, num2){
    let addedNum = num1 + num2;
    let finalBinaryNum = [];

    while (addedNum > 0) {
        if (addedNum % 2) {
            finalBinaryNum.unshift(1);
            addedNum = parseInt(addedNum / 2);
        } else {
            finalBinaryNum.unshift(0);
            addedNum /= 2;
        }
    }
    return finalBinaryNum.join('');
}