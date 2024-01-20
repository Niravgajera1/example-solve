function NumberAddition(str) {
    let DIGITS = '0123456789';
    let numbers = [];
    // First find numbers
    for (let i = 0, number = ''; i < str.length; i++) {
    if (!DIGITS.includes(str[i])) {
    if (number !== '') {
    numbers.push(number);
    }
    number = '';
    } else {
    number += str[i];
    // special case for last char
    if (i === str.length-1) {
    numbers.push(number);
    }
    }
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
    }
    return sum;
    }
