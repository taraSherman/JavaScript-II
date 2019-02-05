// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(items.length);
}
getLength(items, (length) => {
  console.log(length);
})

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(items.length);
}
getLength(items, (length) => {
  console.log(length);
})

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(items.slice(-1)[0]);
}
last(items, (lastItem) => {
  console.log(lastItem);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}
sumNums(5, 6, (result) => {
  console.log(result);
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}
multiplyNums(5, 6, (result) => {
  console.log(result);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
};
contains('Pencil', items, (result) => {
  console.log(result ? true : false);
});
contains('car', items, (result) => {
  console.log(result ? true : false);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
