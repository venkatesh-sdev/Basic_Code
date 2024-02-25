// Selecting Elements

// Single Item
// The Element First Occur in the Dom
const div1 = document.getElementById('pavi-id');
const div4 = document.querySelector('#pavi-id');

// // List of Items
// // All the Element Present in the Dom
const div2 = document.getElementsByClassName('pavi-class');
const div3 = document.getElementsByTagName('div');
const div5 = document.querySelectorAll('.pavi-class');


// // Change Style
div1.style.borderRadius = '50px';
div1.style.background = '#345ff0';

// Adding and Removing the Class
div1.classList.remove('rounded_black')
div1.classList.add('rounded_black')

// Elements Create Add Remove Update
// Creating the New Element
const h1 = document.createElement('h1');
console.log(h1)
h1.innerText = 'Venkatesh';

div1.append(...[h1, h1])

// Event Listen



// Arrays
const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const mappedArray = dummyArray.map((value, index, array) => {
    return value % 2 === 0 && value
});
console.log(mappedArray)

const filterArray = dummyArray.filter(
    (value, index, array) => {
        return value % 2 === 0 && value
    }
);
console.log(filterArray)


// Short Circuting

// && - and
// || - or
// ?? - nullish Colescaeing

// Returns the Second Value when the Value is true
console.log(8 > 10 && 'value');
// Returns the Second Value when the Value is fale
console.log(8 > 10 || 'value');
// Returns the Second Value when the Value is either undefined or null
console.log(8 > 10 ?? 'value');

