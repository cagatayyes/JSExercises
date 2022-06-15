var numbers = []; // empty array. numbers.length (build in property) = 0;
var numbers2 = [1, 2, 3, 4, 5]; // numbers.length = 5;
var numbers3 = new Array(); // numbers.length = 0;
var numbers4 = new Array(1, 2, 3, 4, 5); // numbers.length = 5;
var numbers5 = new Array(10); // numbers.length = 10; eğer Array Constructorı tek argüman ile çağırılırsa lengthi temsil eder

/* console.log(numbers);
console.log(numbers2);
console.log(numbers3);
console.log(numbers4);
console.log(numbers5); */


var differentTypesOfArray = [1, 'word', null, true]; //JS array can have different types.
console.log(differentTypesOfArray);

/*
Best way to create an Array in JS is using [] operator.
not Array Constructor
source: Javascript: The Definitive Guide[O'Reilly] and Javascript: The Good Parts [O'Reilly] 
*/
