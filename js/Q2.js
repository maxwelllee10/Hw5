let array = [1,2,3,4,5,6,7,8,9,10];
let oddArray = array.filter(num => num % 2 != 0);  // odd numbers
let divBy2Or5 = array.filter(num => (num % 2 == 0) || (num % 5 == 0));  // divisible 2 or 5
let divBy3Square = array.filter(num => num % 3 == 0).map(num => num * num);   // get 3 then square
let sumSquare5 = array.filter(num => num % 5 == 0).map(num => num * num).reduce((a, b) => a+b);    // 5, square them, add them

console.log('Original Array: ', array);
console.log('Odd numbers: ', oddArray);
console.log('Numbers divisible by 2 or 5: ', divBy2Or5);
console.log('square of Numbers divisible by 3:', divBy3Square);
console.log('Sum of squares of numbers divisible by 5: ', sumSquare5); 