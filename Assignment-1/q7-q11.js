const x = 6;

// 7. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function addNumbersOldSchool(a, b) {
  return a + b + x;
}
// 8. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const addNumbersArrow = (a, b) => a + b + x;
// 9. Write a function that returns another function. (use arrow functions please)

const thisReturnsAFunction = () => {
  return addNumbersArrow();
};

// 10. given the following code:

const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2));

// Explain why the function that returns from getFunction still has access to "y" if "y" is not a global variable.

The function still has access to "y" because of closures. The functions will have access because of the callback.

// 11. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and console log its result.
// Make sure to handle errors that could be thrown by "couldThrowError()"

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return "success";
};

const tryToThrowErrors = ()=> {
  try{
    couldThrowError()
  } catch(error){
    console.log(error)
  }
}