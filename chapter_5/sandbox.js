// object literals

// const blogs = [
//     { title: 'Why Mac & Cheese rules', likes:30},
//     { title: '10 things to do on vacation', likes:50},
// ]

// let user = {
//   name: "crystal",
//   age: 30,
//   email: "fake@email.com",
//   location: "canada",
//   blogs: [
//     { title: "Why Mac & Cheese rules", likes: 30 },
//     { title: "10 things to do on vacation", likes: 50 },
//   ],
//   login() {
//     console.log("logged in");
//   },
//   logBlogs() {
//     console.log(`This user has written the following blogs:`);
//     this.blogs.forEach((blog) => {
//       console.log(blog.title, blog.likes);
//     });
//   },
// };

// console.log(user);

// user.age = 35;

// console.log(user.age);
// console.log(user["email"]);

// user["name"] = "ralph";

// console.log(user["name"]);

// user.login();
// user.logBlogs();

//////// Math object
const area = 7.7;

console.log(Math.floor(area));
console.log(Math.round(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random*100));



