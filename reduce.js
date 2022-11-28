  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr); // Accumulator and Current value added to get sum of all values in array. acc keeps track of what's been added and curr keeps track of current item to be added
console.log(sum); // Prints 10 - sum of all numbers in array

/**
 * To break the above down step by step:
 * Accumulator: 0 Current Value: 1 Total: 1
 * Accumulator: 1 Current Value: 2 Total: 3
 * Accumulator: 3 Current Value: 3 Total: 6
 * Accumulator: 6 Current Value: 4 Total: 10
 * 10 <- Final sum
 * 
 * The function executes 4 times even though there's 5 elements in the array because the reduce method takes a second parameter and if it's not specified it
 * will take the first element in the array as the accumulator and the accumulation process starts with the second element, in this case 1 is added to 0.
 * If we speficy an initial value to use as the accumulator then the function will execute 5 times starting with the first element of the array. If we set 10 as the
 * initial value then the final result would be 20.
 */


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
/**
 * Getting total years experience of the team using dot notation to get yrsExperience from the members.
 * We have to add 0 as the initial value for the accumulator as a starting point because without it, it will try to use the first element which in this case is an object (Andrew)
 * JavaScript will try to add curr.yrsExperience to the object and returns an object/string/integer hybrid thing - Output will be [object Object]713
*/
console.log(totalExperience); // Prints 16

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) { //Check if current profession being checked already exists in the object we're accumulating into
    acc[key] = curr.yrsExperience; // If not, the property will be added into the accumulator and its value will be set to the team member's years of experience.
  } else { // If the profession (key) does already exist
    acc[key] += curr.yrsExperience; // Add the years experience of the current profession to the value
  }
}, {});

console.log(experienceByProfession); // Prints { Developer: 12, Designer: 4 }

/**
 * Creating an object with total years of experience by profession.
 * The first {} is the boundaries of the callback function and the second empty {} is an empty object and is what the accumulator will be on the first pass.
 * 
 * Useful as if we were to add another team member with a new profession, the function will add that profession with the total years experience without the function having
 * to be altered.
 */