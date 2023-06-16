// My solution with help from freecodecamp tutorial

function repeatString (str, times) {
    if (times === 0) {
        return "";
    } else if (times < 0) {
        return "ERROR";
    } else if (times === 1) {
        return str;
    } else {
        return str + repeatString(str, times - 1);
    }
}
// Do not edit below this line
module.exports = repeatString;
