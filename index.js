
//calculate tax
function calculateTax(amount){
    return amount*0.10;
}

//convert to uppercase
function convertToUpperCase(text){
    return text.toUpperCase();
}

//Find maximum
function findMaximum(num1,num2){
    if (num1 > num2){
        return num1;
    }
    else {
        return num2;
    }
}

//is palindrome
function isPalindrome(word){
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}
//calculate discounted price
function calculateDiscountedPrice(originalPrice,discountPercentage){
    let discount = (discountPercentage/100)*originalPrice;
    return originalPrice - discount;
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };