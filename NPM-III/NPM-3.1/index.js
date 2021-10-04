function isPalindrome(num){
    num = String(num);
    let i = 0;
    let j = num.length-1;
    while(i < j){
        if(num[i] != num[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

module.exports = isPalindrome;