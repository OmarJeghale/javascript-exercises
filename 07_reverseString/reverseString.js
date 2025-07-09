let reversed = ''
const reverseString = function(str) {
        let splitStr = str.split('')
        reversed = splitStr.reverse()
        reversed = reversed.join('')

        return reversed
};

// Do not edit below this line
module.exports = reverseString;
