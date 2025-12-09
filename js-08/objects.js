// const emptyObjects = {};
// const car = {
//   color: "red",
//   model: 2020,
//   type: "Toyota",
// };
// console.log(car.model);
// const dog = {
//   breed: "British",
//   getDogInfo: function () {
//     console.log(this);
//   },
// };
// console.log(car);
// dog.name = "Watson";
// dog.legs = 4;
// dog.color = "black";
// dog.age = 12;
// dog.bark = "woof woof";
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.color);
// console.log(dog.age);
// console.log(dog.bark);
// console.log(dog.getDogInfo());
// // const users = {
// //   Alex: {
// //     email: "alex@alex.com",
// //     skills: ["HTML", "CSS", "JavaScript"],
// //     age: 20,
// //     isLoggedIn: false,
// //     points: 30,
// //   },
// //   Asab: {
// //     email: "asab@asab.com",
// //     skills: [
// //       "HTML",
// //       "CSS",
// //       "JavaScript",
// //       "Redux",
// //       "MongoDB",
// //       "Express",
// //       "React",
// //       "Node",
// //     ],
// //     age: 25,
// //     isLoggedIn: false,
// //     points: 50,
// //   },
// //   Brook: {
// //     email: "daniel@daniel.com",
// //     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
// //     age: 30,
// //     isLoggedIn: true,
// //     points: 50,
// //   },
// //   Daniel: {
// //     email: "daniel@alex.com",
// //     skills: ["HTML", "CSS", "JavaScript", "Python"],
// //     age: 20,
// //     isLoggedIn: false,
// //     points: 40,
// //   },
// //   John: {
// //     email: "john@john.com",
// //     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
// //     age: 20,
// //     isLoggedIn: true,
// //     points: 50,
// //   },
// //   Thomas: {
// //     email: "thomas@thomas.com",
// //     skills: ["HTML", "CSS", "JavaScript", "React"],
// //     age: 20,
// //     isLoggedIn: false,
// //     points: 40,
// //   },
// //   Paul: {
// //     email: "paul@paul.com",
// //     skills: [
// //       "HTML",
// //       "CSS",
// //       "JavaScript",
// //       "MongoDB",
// //       "Express",
// //       "React",
// //       "Node",
// //     ],
// //     age: 20,
// //     isLoggedIn: false,
// //     points: 40,
// //   },
// // };
// console.log(users.Alex.skills.length);
// console.log(users.Asab.skills.length);
// console.log(users.Brook.skills.length);
// console.log(users.Daniel.skills.length);
// console.log(users.John.skills.length);
// console.log(users.Paul.skills.length);
// console.log(users.Thomas.skills.length);
// function countUsers(users) {
//   let loggedInCount = 0;
//   let highScoreCount = 0;
//   const userObjects = Object.values(users);
//   for (const user of userObjects) {
//     if (user && user.isLoggedIn) {
//       loggedInCount++;
//     }
//     if (user && Number(user.points) >= 50) {
//       highScoreCount++;
//     }
//   }
//   return { loggedInCount, highScoreCount };
// }
// console.log(countUsers(users));

// function find(users) {
//   let people = [];
//   for (const [name, user] of Object.entries(users)) {
//     if (user.skills.includes("MERN")) {
//       people.push(name);
//     }
//   }
//   email: "simsim@sim.com",
//   skills: ["HTML", "CSS"],
//   age: 22,
//   isLoggedIn: false,
//   points: 0,
// };
// console.log(users);
// console.log(Object.keys(users));
// console.log(Object.values(users));
// console.log(Object.entries(users));
const countriesExample = {
  Japan: {
    name: "Japan",
    capital: "Tokyo",
    population: 125960000,
    languages: ["Japanese"],
  },
  Turkey: {
    name: "Turkey",
    capital: "Ankara",
    population: 84339067,
    languages: ["Turkish"],
  },
  Canada: {
    name: "Canada",
    capital: "Ottawa",
    population: 38008005,
    languages: ["English", "French"],
  },
  Brazil: {
    name: "Brazil",
    capital: "Brasília",
    population: 214300000,
    languages: ["Portuguese"],
  },
  Kenya: {
    name: "Kenya",
    capital: "Nairobi",
    population: 53771300,
    languages: ["Swahili", "English"],
  },
};

for (const [name, country] of Object.entries(countriesExample)) {
  console.log(
    `${country.name} — Capital: ${country.capital}; Population: ${
      country.population
    }; Languages: ${country.languages.join(", ")}`
  );
}
const personAccount = {
  firstName: "Simsim",
  lastName: "sude",
  incomes: [
    { description: "Salary", amount: 40000 },
    { description: "Freelance", amount: 8000 },
  ],
  expenses: [
    { description: "Rent", amount: 2500 },
    { description: "Groceries", amount: 600 },
  ],
  totalIncome() {
    let sum = 0;
    for (const item of this.incomes) {
      sum = sum + Number(item.amount);
    }
    return sum;
  },
  totalExpense() {
    let sum = 0;
    for (const item of this.expenses) {
      sum = sum + Number(item.amount);
    }
    return sum;
  },
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  },
  accountInfo() {
    return `${this.firstName} ${
      this.lastName
    } has total income ${this.totalIncome()} and total expense ${this.totalExpense()}. Balance: ${this.accountBalance()}.`;
  },
  addIncome(description, amount) {
    this.incomes.push({
      description: String(description),
      amount: Number(amount) || 0,
    });
  },
  addExpense(description, amount) {
    this.expenses.push({
      description: String(description),
      amount: Number(amount) || 0,
    });
  },
};
console.log(personAccount.accountInfo());
// Simsim Sude has total income 48000 and total expense 3100. Balance: 44900.

personAccount.addIncome("Bonus", 2000);
personAccount.addExpense("New Phone", 1200);

console.log(personAccount.totalIncome()); // 50000
console.log(personAccount.totalExpense()); // 4300
console.log(personAccount.accountBalance()); // 45700
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
  
];
// function signUp(){
//   const userName = prompt("Enter name:");
//    if (!userName) return;
//    const exists = users.some(u => u.username === userName)
//  if(exists){
//   console.log('You have an account already')
//   return null
//  }
//  const email = prompt("Enter email:") || "";
//  const password = prompt("Enter password:") || "";
//  const newUser = { 
//   _id: Math.random().toString(36).slice(2, 8) , 
//   username: userName, 
//   email:email, 
//   password:password, 
//   createdAt:new Date().toLocaleString(), 
//   isLoggedIn: false 
// };
//   users.push(newUser);
//  console.log('Account created', newUser);
//   return newUser
// }
// signUp()
// console.log(users)

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
function rateProduct (){
  for(const product of products){
    if(Array.isArray(product.ratings)&& product.ratings.length) {
      product.ratings.forEach(r => {
        console.log(`${product.name} rated ${r.rate}`);//!
      })
     }
    else {
      console.log(`${product.name} has no ratings`);
    }
  }
}
rateProduct()
// function likeProduct() {
//   for(const product of products){
//     if(Array.isArray(product.likes)&& product.likes.length){
//       product.likes=null
//       console.log("you dont like")
//     }else{
//       product.likes.push('like')
//       console.log("you liked ")
//     }
//   }
//   return 1
// }
// console.log(products)
// likeProduct()
// console.log(products)
// toggle like for a single product by _id
function likeProduct(productId, userId = 'guest') {
  const product = products.find(p => p._id === productId);
  if (!product) return null; // product not found

  if (!Array.isArray(product.likes)) product.likes = [];

  const idx = product.likes.indexOf(userId);
  if (idx === -1) {
    // not liked yet -> add like
    product.likes.push(userId);
    console.log(`You liked ${product.name}`);
    return { liked: true, product };
  } else {
    // already liked -> remove like
    product.likes.splice(idx, 1);
    console.log(`You unliked ${product.name}`);
    return { liked: false, product };
  }
}

likeProduct('aegfal', 'fg12cy'); 
console.log(products);