// const speak = function(){
//     console.log('good day!');
// };

// // greet();
// // greet();
// // greet();

// // speak();

// function greet(){
//     console.log('hello');   
//    }


// arguments & parameters
// const speak = function(name = 'luigi'){
//     console.log(`good day ${name}`);
// };

// speak();
// speak('shaun')

// returning values

// const calcArea = function(radius){
//     return  3.14 * radius**2;
// }

// const area = calcArea(10);
// console.log(area);

//OR 
// console.log(calcArea(10));


// arrow function //When there is only ONE parameter, you can create this without brackets.
// const calcArea = radius => 3.14 * radius**2;

// console.log(calcArea(10));

////////////// practice arrow functions
// const greet = () =>'hello world';

// console.log(greet());

// const bill = (products,tax) =>{
//     let total = 0;
//     for(let i = 0; i < products.length;i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([10,15,30],0.2))

/////////////// Callbacks and foreach

// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// }

// myFunc(value=>{
//     console.log(value);
// })

// let people = ['mario', 'luigi', 'ryu', 'chun-li', 'shaun'];

// const logPerson = (person, index)=>{
//     console.log(`${index} - Hello, ${person}`);
// }

// people.forEach(logPerson);

// Get a reference to 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'chun-li', 'shaun'];

let html = ``;

people.forEach(function(person){
    html += `<li style="color:purple">${person}</li>`;
})

console.log(html);
ul.innerHTML = html;