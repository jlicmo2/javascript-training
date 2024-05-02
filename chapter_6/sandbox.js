// const para = document.querySelector('body > h1');


// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');


// console.log(errors);

// paras.forEach(para=>{
//     console.log(para);
// });


// get an element by ID
// const title = document.getElementById('page-title')
// console.log(title);

// // get an element by class
// const errors = document.getElementsByClassName('error')
// console.log(errors);



///////changing text inside a specified element
//const para = document.querySelector('p');

// para.innerText += '.... I guess?'

// console.log(para);

// const paras = document.querySelectorAll('p');

// paras.forEach(para =>{
//     console.log(para.innerText);
//     para.innerText += ' SIKE';
// })

// const content = document.querySelector('.content');
// console.log(content.innerHTML);

// content.innerHTML='<h2> WAAAAAAAAAA </h2>';


// const people = ['mario','luigi','yoshi'];

// people.forEach(person =>{
//     content.innerHTML += `<p>${person}</p>`;
// });


////////// Getting and setting attribute of element
// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href','https://roblox.com');
// link.innerText = 'Link to roblox :D';

// const msg = document.querySelector('p.error')
// console.log(msg.getAttribute('class'));

// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color:green');
// msg.innerText = 'Success!';


////// Appending attributes to already existing attributes
// const title = document.querySelector('h1');

// title.setAttribute('style', 'margin:50px'); // This REMOVES the previous styling

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '67px';
// title.style.margin = '';


/////////// Adding and removing classes
// const content = document.querySelector('p');

// console.log(content.classList);

// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll("p");

paras.forEach((p) => {
  if (p.textContent.includes("error")) {
    p.classList.add("error");
  }
  if (p.textContent.includes("success")) {
    p.classList.add("success");
  }
});

const title = document.querySelector('.title');

title.classList.toggle('test');





