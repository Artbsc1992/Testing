const stringLength = (string) => {
    if(string.length > 0 && string.length <= 10){
    return string.length;
    } else {
        return "error";
    }
}

const stringReverse = (string) => {
    return string.split('').reverse().join('');
}

const stringCapital = (string) => {
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

module.exports = {stringLength, stringReverse, stringCapital};
