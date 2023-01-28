const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
        }
    }
}

findNemo(everyone); // O(n) --> Linear Time

// n -> Big O depends on the number of inputs; as the number of inputs increases, so too will n, in a linear fashion;
// O(n) is likely the most common notation you'll find


const boxes = [0, 1, 2, 3, 4, 5]

function findNemoConstTime(array) {
    console.log(array[0])
}

findNemoConstTime(everyone); //O(1) -> Constant time; No matter how many items we have or add to the array, the function always just logs the first index, only one operation to complete!

function logFirstTwoBoxes(array) {
    console.log(array[0]) //O(1)
    console.log(array[1]) //O(1)
}

logFirstTwoBoxes(boxes); // In total, this is O(2) -> even so, no matter what, we'd just call this O(1); O(1) is excellent, very scalable and amazing!



//EXERCISE What is the Big O of the function below?

function funChallenge(input) {
    let a = 10;
    a = 50 + 3;
  
    for (let i = 0; i < input.length; i++) {
      anotherFunction();
      let stranger = true;
      a++;
    }
    return a;
  }

  // O(n), because the function loops over the length of an array. As the size of said array increases, so too will the number of operations in a linear fashion.