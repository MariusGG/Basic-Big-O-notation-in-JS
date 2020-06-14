/*
  O(1) Constant time algorithm
    - this is when no matter the size of the input/data size
      the executable time is always the same.
      in Big O notation this is referred to as O(1) or Constant.
      This can be described as given an array of items,
      the algorithm will precisely execute an operation the same
      time regardless of the size of input/data
      - time refers to iteration here
      - this can be seen in algorithms which return the the
      first/last or a given element within object/array etc. array.includes('cake'), array[0], ...item > 1...
      */
const fruit = ["🍓", "🍐", "🍊", "🍌", "🍍", "🍑", "🍎", "🍈", "🍊", "🍇"];

const getLastItem = items => items[items.length - 1];
// "🍇"
const timesTen = (num) => num * 10
// timesTen(2) = 20
const getFirstItem = items => items[0]
// "🍓"

/*
O(log(n)) Logarithmic time algorithm
  - this can be describe as the binary/merge search operation
    this can also be considered a divide and conquer algorithm process.
  - this approach is usually considered the best approach when dealing with big collections.
  - the most common logarithmic algorithm would be the Binary search.
    this operation is achieved by, given a input/data and the target value

    the algorithm would first get the middle point of the input etc.. by doing a input.length / 2
    - this would allow the iteration time to be shortened if input size was hundreds/thousands or even millions
    - we would then need to check  if are middle point is less/greater than are given target or even equal to the middle,
      this would then be one iteration done on are input to get are given value.
    - this operation would performed until we have found our given target.
    - this is considered good practice because it is very close to are constant algorithm.
      except we have to repeat the operation in order to get closer to our target value.
      We are constantly cutting the input in half, meaning we would only be looking at a fraction of our input.
    - a good example of this would searching for the letter "20" in an array of 100 items, half is 50 and now thats one operation....etc
*/
const binarySearch = (items, value) => {
  var firstIndex = 0,
    lastIndex = items.length - 1,
    middleIndex = Math.floor((lastIndex + firstIndex) / 2);

  while (items[middleIndex] != value && firstIndex < lastIndex) {
    if (value < items[middleIndex]) {
      lastIndex = middleIndex - 1;
    }
    else if (value > items[middleIndex]) {
      firstIndex = middleIndex + 1;
    }
    middleIndex = Math.floor((lastIndex + firstIndex) / 2);
  }

  return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
binarySearch(items, 1); // 0
binarySearch(items, 5); // 4

/*
O(n) Linear time algorithm
  - this is when we need the consider the number of iteration depending on the input/date size
    in Big O notation this when the number of operation increases depending on the size of input O(n) / "Linear time"
  - given I have a library size of "N" it will take "N" iterations
    So if I increase my library size, the operation time will increase as well
  - in Big O notation we would need to consider the worst case scenario,
    which would be how long would it take for the algorithm to get to my last document or item within the input.
    so performance is dependent on input size.
  - this would work great if my library size is only a few hundreds but if I increase my library size this wouldn't be very efficient.
  - an example would also be an algorithm which adds ups all elements within an input, as that input would increase in correlation to the input.
    but if I need an algorithm which needs to read the entire input, then linear time would be the best considered operation etc...getting a grand total.

*/
const findIndex = (items, match) => {
  for (let i = 0, total = items.length; i < total; i++)
    if (items[i] == match)
      return i;
  return -1;
};
findIndex(items, 9) // 7
findIndex(items, 10) // -1

const exampleLinear = (n) => {
  for (var i = 0; i < n; i++) {
    console.log(i)
  }
}
exampleLinear(5) // 0,1,2,3,4
const printItems = (arr) => arr.forEach(item => console.log(item));
printItems(fruit) // "🍓", "🍐", "🍊", "🍌", "🍍", "🍑", "🍎", "🍈", "🍊", "🍇"

/*
O(n^2) Quadratic time algorithm
  - this algorithm operation would compare or add an item with every other item
    in Big O notation this considered to be O(n^2) its times and space consuming.
  - this is usually an iteration within an iteration, which is like having a O(1)/O(n) within a loop which adds or compares the items
  - an example would be if I wanted to know if I have duplicate items within my library
  - depending on the size of the input this operation can be slow
    also, this operation be done using O(n)
*/
const bigBasket = ["🍓", "🍐", "🍊", "🍌", "🍍", "🍑", "🍎", "🍈", "🍐", "🍇"];
const smallBasket = ["🍓", "🍐", "🍊"]
const matcher = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return `Match found at ${i} and ${j}`;
      }
    }
  }
  return 'No matches found 😞';
}
matcher(bigBasket)  // "Match found at 1 and 8"

const buildSquareMatrix = items => {
  let matrix = [];
  for (let i = 0, total = items.length; i < total; i++) {
    matrix[i] = [];
    for (let j = 0, total = items.length; j < total; j++)
      matrix[i].push(items[j]);
  }
  return matrix;
};

buildSquareMatrix(smallBasket)
// ["🍓", "🍐", "🍊"]
// ["🍓", "🍐", "🍊"]
// ["🍓", "🍐", "🍊"]
