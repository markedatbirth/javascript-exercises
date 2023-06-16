// Ai assisted answer. Spent *several* hours on this one and also looked all through articles and discord. Could not seem to figure out 2nd part.

const removeFromArray = function(array, ...args) {
  let myArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!args.includes(array[i])) {
      myArray.push(array[i]);
    }
  }
  return myArray;
}


/*

# Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

## Hints

The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
- [Check this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  Scroll down to the bit about `Array.from` or the spread operator. - [Or this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
  
*/

// Do not edit below this line
module.exports = removeFromArray;
