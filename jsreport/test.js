/**function */
// function myFunction() {
//     let text;
//     if (confirm("Press the button") == true) {
//         text = "Done";
//     } else {
//         text = "Bruh";
//     }
//     document.getElementById("demo").innerHTML = text;
// }

// function myFunction() {
//     let text = 
//     document.getElementById("demo").innerHTML;
//     document.getElementById("demo").innerHTML = text.replace("Trung","React");
// }

// var fullName;

// fullName = 'Pham Chi Trung';

// document.write(fullName + ' ' + 'Huh')


// let x = "100";
// let y = "10";
// let z = x / y;
// console.log(z);

// Numbers
// let x = 100;
// let y = new Number (100);

// document.getElementById("demo").innerHTML = (x==y);

/**Array shift */
// const newList = ["Trung", "React", "Bruh"]

// console.log(newList.shift());

// console.log(newList);

/* unshift */

// const newList = ["Trung", "React", "Bruh"];

// console.log(newList.unshift("JavaScript"));

// console.log(newList.unshift);


/* Array Length */

// const newArray = ["Trung", "React", "Bruh"];

// document.getElementById("demo").innerHTML = newArray;
// newArray[newArray.length] = "JavaScript";

// document.getElementById("demo").innerHTML = newArray;

/* concat() */

// const oldList = ["Trung", "React", "Bruh"];

// const newList = ["JavaScript", "Ruby", "PHP"];

// const mergeList = oldList.concat(newList);

// console.log(mergeList);

/* splice */

// const oldList = ["Trung", "React", "Bruh"];

// document.getElementById("demo").innerHTML = oldList;
// oldList.splice(1, 0, "JavaScript", "Ruby");

// console.log(oldList);

/* toString() */

// const oldList = ["Trung", "ReReact", "Bruh"]

// document.getElementById("demo").innerHTML = oldList.toString();

/* Sort Numeric */

// const points = [1, 2, 9, 4, 5, 6, 7, 11];

// document.getElementById("demo").innerHTML = points;

// points.sort(function(a,b){return a - b});

// console.log(points)

/* compare function */

// const points = [1, 11, 4, 7, 9, 34, 90, 6];

// console.log(points);

// function myFunction1() {
//     points.sort();
//     document.getElementById("demo").innerHTML = points;
// }

// function myFunction2() {
//     points.sort(function(a, b){return a - b });
//     document.getElementById("demo").innerHTML = points;
// }


/* high and low array values */

// const points = [1, 11, 4, 7, 9, 34, 90, 6];
// points.sort(function(a,b){return a - b});

// document.getElementById("demo").innerHTML = points[2];

/* Iteration */
/* forEach() */

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// duyệt từng phần tử của mảng để cộng dồn vào biến sum
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum); // 55

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

forEach(numbers, function (1) {
    sum += 1;
});

console.log(sum);

