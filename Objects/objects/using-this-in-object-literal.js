// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();
console.log( user.ref.name ); // What's the result?
// Undefined
// YOu are calling this function
// function makeUser(){
//     return this; // this time there's no object literal
//   }
// this is the way to do it
function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }