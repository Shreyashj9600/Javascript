const user = { 
    userName :"shreyash",
    price : 999,

    welcomeMassage : function (){
        // console.log(`user name is ${this.userName} and price is ${this.price}`)
    }
}

user.welcomeMassage()

function one(){
    // console.log(this)
}
one()

const chai = function () {
    let userName = 'hitesh'
    // console.log(this.userName)
}
chai()

const two = () => {
    let userName = 'hitesh'
    // console.log(this.userName)
}
two()

const addTwoNo = (num1 , num2) => {
    return num1 + num2 
}

// console.log(addTwoNo(4,6))
let result = addTwoNo(4,5)
console.log(result)

const name = (num1 , num2 ) => (num1 + num2)
console.log(name(4,4))

    

const myArr = [1,2,3,4,5]

myArr.forEach((val)=> {
    console.log('this is my o/p ' ,val);
    
})