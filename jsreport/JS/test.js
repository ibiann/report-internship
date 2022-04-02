"use strict";
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

/* map() */

// var newList = [
//     'Trung',
//     'React',
//     'Ruby'
// ];

// newList.map(function(newList) {
//     console.log(newList);
// });

// var htmls = newList.map(function (newList) {
//     return "<h2>".concat(newList, "</h2>");
// });


// console.log(htmls);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const numbers2 = numbers.map(myFunction);

// console.log(numbers2);

// function myFunction(value){
//     return value * 2;
// }

/* filter */
// const numbers = [10, 15, 20, 25, 49];

// const numbersLarger = numbers.filter(myFunction);

// console.log(numbersLarger);


// function myFunction (value, index, array) {
//     return value > 18;
// }

/* Reduce */

// const numbers = [90, 20, 25, 30, 45];

// let sum = numbers.reduce(myFunction);

// console.log("The sum is:" + " " + sum);

// function myFunction(total, value, index, array) {
//     return total + value;
// }

/* every() */

// const numbers = [10, 15, 20, 25, 49];

// let numCon = numbers.every(myFunction);

// console.log(numCon);

// function myFunction (value) {
//     return value > 18;
// }

// const smallerNum = (currentValue) => currentValue < 18;


// const arr1 = [10, 15, 20, 25, 49];

// console.log(arr1.every(smallerNum));


/* some */
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let numCon = numbers.some(myFunction);

// console.log(numCon);

// function myFunction (value) {
//     return value > 18;
// }


/* Switch */
// var date = 6;

// switch (date) {
//   case 2:
//     console.log('Today is Monday');
//     break;

//   case 3:
//     console.log('Today is Monday');
//     break;

//   case 4:
//     console.log('Today is Monday');
//     break;

//   case 5:
//     console.log('Today is Thursday');
//     break;
//     default:
//         console.log('Today is Non');
// }


/* for in */
// var obj = {name: 'Trung', age: 22, major: "ICT"};

// for (var prop in obj) {
//     console.log('obj.' + prop + '=' +obj[prop]);
// };

/* for of */

// var myString = 'Trung';

// for (var value of myString) {
//     console.log(value);
// }

// var myInfo = 'Trung';

// for (var value of myInfo) {
//     console.log(value);
// }

/* while */

// var i = 0;

// var n = 1;

// while (i < 3) {
//     console.log(i);
//     i++;
//     i += n;
// }


/* do while */

// var result = '';

// var i = 0;

// do {
//     i += 1;
//     result += i + ' ';

// }
// while ( i > 0 && i < 5 && i == 1);

// console.log(result);


// var i = 10;
// var thisSucces = false;

// do {
//     i++;

//     console.log(' ' + i);
//     if (true) {
//         thisSucces = true;

//     }
// }
// while (!thisSucces && i < 10);



/* set */

// const animals = new Set(["dog", "cat", "mouse"]);

// console.log(animals.size);

// console.log(animals.add("bird"));

/* error */

// try {
//     adddlert("Welcome");
// }

// catch(err) { 
//     console.log(err.message);
// }

// function myFunction() {
//     const message = document.getElementById("p01");

//     message.innerHTML = "";

//     let x = document.getElementById("demo").value;
//     try {
//         if(x == " ") throw "is empty";
//         if(isNaN(x)) throw "is not a number";

//         x = Number(x);
//         if(x > 10) throw "is too high";
//         if(x < 5) throw "is too low";
//     }
//     catch(err) {
//         message.innerHTML = "Input " + err;
//     }
//     finally {
//         document.getElementById("demo").value = "";
//     }
// }

/* this */
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 1000,
//     fullName: function() { 
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.fullName());

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 1000,
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// const subPerson = {
//     firstName: "Hege",
//     lastName: "Nilsen"
// }

// let fullName = person.fullName.bind(subPerson);

// document.getElementById("demo").innerHTML = fullName();

/* class */

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }
//     const myCar = new Car("BWM", 2015);
// console.log(myCar.name + " " + myCar.year);

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }


// age() {
//     let date = new Date ();
//     return date.getFullYear() - this.year;
// }
// }

// let myCar = new Car ("BWM", 2015);

// console.log(myCar.name + " " + myCar.year);

// console.log("My car is " + myCar.age() + " years old.");

//Send parameter 

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

// age(x) {
//     return x - this.year;
//     }
// }

// let date = new Date();
// let year = date.getFullYear();

// let myCar = new Car("BWM", 2015);
// document.getElementById("demo").innerHTML= "My car is " + myCar.age(year) + " years old.";

