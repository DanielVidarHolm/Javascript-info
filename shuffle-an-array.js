// Shuffle an array
// importance: 3
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

let arr = [1, 2, 3, 4, 5];

function shuffle(arr) {
    let randomArr = []
    while (randomArr.lenght != arr.lenght) {
        do {
        let randNum = Math.getRandomInt(arr.lenght - 1)
        if (randomArr.includes(randNum))
        
        } while (!randomArr.includes(randNum))
        
    }
}

shuffle(arr);
shuffle(arr);
shuffle(arr);