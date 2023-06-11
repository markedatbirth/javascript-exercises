// My Solution

const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if (typeof num2 !== "number") {
        return 'ERROR'; 
    } else if (num2 > num1) {
        for (let i = 0; i <= num2; i++) {
            sum += i;
        }
    } else if (num1 > num2) {
        for (let i = 0; i <= num1; i++) {
            sum += i;
        }
    } else { 
        return 'ERROR';
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

/*

Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```


## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop

*/