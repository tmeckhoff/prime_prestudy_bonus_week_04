function numberOne(value) {
return value * 5;
}

function numberTwo(value) {
    return value - 5;
}

function numberThree(value) {
    return value + 5;
}

numberOne(numberTwo(numberThree(20)));

function splinter(a, b) {
    var z = a * b;
    var myArray = [a, b, z];
    var groupMyArray = myArray.join(', ');
        return groupMyArray;
}

console.log(splinter(1, 2));