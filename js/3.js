var foods = [
  'Popcorn',
  'Potato chips',
  'Shrimp',
  'Chicken rice',
  'Poutine',
  'Tacos',
  'Toast',
  'French Toast',
  'Crab',
  'Pho',
  'Lasagna',
  'Brownie',
  'Lobster',
  'Donuts',
  'Ice cream',
  'Hamburger',
  'Sushi',
  'Chocolate',
  'Pizza'
];

console.log(foods.indexOf('Pho')); //9
console.log(foods.indexOf('Donuts')); //13

foods.splice(13, 1);

console.log(foods[5], foods[10]); // Tacos, Lasagna

var word = "Space";
Space = "Spice";

console.log(Space);

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
ages.sort ((a, b) => a - b);
var lowMiddle = Math.floor((ages.length -1) / 2);
var highMiddle = Math.ceil((ages.length -1) / 2);
var median = (ages[lowMiddle] + ages[highMiddle]) / 2;

console.log(median); 

