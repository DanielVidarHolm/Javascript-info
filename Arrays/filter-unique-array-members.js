// Filter unique array members
// importance: 4
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   /* your code */
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O

function unique(arr) {
    const filteredArray = [];
    arr.forEach((e,i) => {
        if (!filteredArray.includes(e)) {
            filteredArray.unshift(e);
        }
    })
    return filteredArray
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(strings) ); // Hare, Krishna, :-O