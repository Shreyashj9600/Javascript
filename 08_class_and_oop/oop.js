const user = {
    username: 'shreyash',
    logincount: 10,
    signedin : true,

    getUserDetail: function(){
        console.log('got user deatils from data base ')
        console.log(`user name is ${this.username}`);
        
    }
}

// console.log(user.username)
// console.log(user.getUserDetail());


function userFun(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;
}

const userOne = new userFun('shreyash', 10 , true)
const userTwo = new userFun('hitesh', 10 , false)
console.log(userOne)
console.log(userTwo)