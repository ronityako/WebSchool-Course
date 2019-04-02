var len = require('./calcStr');
exports.arrStrLength = function(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += len.strLength(element);
    });
    return sum;
}

