const removeFromArray = function(arr, ...args) {
    let newArr = arr.filter(number => !args.includes(number) )
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
