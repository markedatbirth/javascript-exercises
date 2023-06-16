// My solution

const leapYears = function(year) {
    if (year % 100 === 0 && year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};
console.log(leapYears(2000));

// Leap years are years divisible by four (like 1984 and 2004). 
// Years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
// Use an `if` statement and `&&` to make sure all the conditions are met properly


// Do not edit below this line
module.exports = leapYears;
