// var name = 'Reactjs';

// var value = 1000;

// var course = {
//     name,
//     value,
//     getName: function() {
//         return this.name;
//     }
// };

// console.log(course);

var fieldName = 'name';
var fieldPrice = 'value';

const course = {
    name: 'developer',
    [fieldName]: 'Trung',
    [fieldPrice]: 100
};

console.log(course);