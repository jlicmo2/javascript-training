// for loops
// for(let i = 0; i < 5; i++){
//     console.log('in loop:',i);
// }

// console.log('end');

//  const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//     //console.log(names[i]);
//     let html =`<div>${names[i]}</div>`;
//     console.log(html);
// }

// while loops
// let i = 0;

// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// do while loops
// let i = 5;

// do{
//     console.log(i);
//     i++;
// }
// while(i < 5)


// if statements
// const age = 20;

// if(age > 20){
//     console.log('You are over 20');
// }

// const ninjas = ['shaun', 'mario', 'luigi'];

// if(ninjas.length >= 3){
//     console.log("that's a lot of ninjas");
// }


// else if
// const password = 'pass';
// if(password.length >= 12){
//     console.log('very strong password')
// } else if(password.length >= 8){
//     console.log('that password is long enough')
// } else {
//     console.log('not long enough')
// }

// logical operators && and || 
// const password = 'p@ssasdasdasdasd';
// if(password.length >= 12  && password.includes('@')){
//     console.log('very strong password')
// } else if(password.length >= 8 || password.includes('@')){
//     console.log('that password is long enough')
// } else {
//     console.log('not long enough')
// }

// logical not (!)

// let user = false;
// if(!user){
//     console.log('you must be logged in to continue')
// }

// console.log(!true);
// console.log(!false);


// break and continue
// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('your score: ', scores[i])
//     if(scores[i] === 100){
//         console.log('lol top score');
//         break;
//     }
// }

// Switch Statements
// const grade = 'D';

// switch (grade) {
//     case 'A':
//         console.log('You got an A');
//         break;
//     case 'B':
//         console.log('You got a B');
//         break;
//     case 'C':
//         console.log('You got a C');
//         break;
//     case 'D':
//         console.log('You got a D');
//         break;
//     default:
//         console.log('Not valid');
// }

// variables & block scope
// const age = 30;

// if(true){
//     const age = 40;
//     const name = 'shaun';
//     console.log('inside 1st code block: ', age, name);

//     if(true){
//         const age = 50;
//         console.log('inside 2nd code block: ', age);
//     }
// }

// console.log('outside code block: ', age, name);