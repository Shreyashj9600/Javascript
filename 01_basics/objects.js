// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name)
console.log(typeof JsUser[mySym])


const sym1 = Symbol('uniqueKey');
const obj = {
  [sym1]: 'value',
};

console.log( typeof obj[sym1]); // 'value'
console.log(JsUser)