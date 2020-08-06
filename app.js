var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//After every command, use console.log() to inspect your arrays. A good way to do that is to do something like:

//console.log("fruit: ", fruit);
//console.log("vegetables: ", vegetables);

//Remove the last item from the vegetable array.
vegetables.pop()
console.log("vegetables:", vegetables)

//Remove the first item from the fruit array.
fruit.shift()
console.log("fruit:", fruit)

//Find the index of "orange."
const fruitIndex = fruit.indexOf('orange')
console.log("fruit:", fruitIndex)


//Add that number to the end of the fruit array.
fruit.push("1")
console.log("fruit:", fruit)


//Use the length property to find the length of the vegetable array.
const vegieLength = vegetables.length
console.log(vegieLength)


//Add that number to the end of the vegetable array.
vegetables.push('3')
console.log('vegetables:', vegetables)


//Put the two arrays together into one array. Fruit first. Call the new Array "food".
const food = fruit.concat(vegetables)
console.log(food)


//Remove 2 elements from your new array starting at index 4 with one method.
const lessFood = food.splice(4, 2)
console.log(food)

//Reverse your array.
const reverseFood = food.reverse()
console.log(food)

//Turn the array into a string and return it.

console.log(reverseFood.toString())

//If you've done everything correctly, the last step should print the following string to the console:

//3,pepper,1,watermelon,orange,apple 

//DONE!