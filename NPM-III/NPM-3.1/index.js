function isPalindrome(num) {
    num = String(num);
    let i = 0;
    let j = num.length - 1;
    while (i < j) {
        if (num[i] != num[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}


function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num%i == 0){
            return false;
        }
    }
    return true;
}


module.exports = {
    isPalindrome,
    isPrime
}