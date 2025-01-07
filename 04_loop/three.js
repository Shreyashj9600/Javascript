// for of 

const arr = [1,2,3,4,5,6,7]

for (const number of arr) {
    console.log(number)
}

const str = "Hello World !"

for(const val of str){
    console.log(`value of eact char ${val}`)
}

// Maps

const map = new Map();
map.set('IN','India')
map.set('USA', 'United State of America')
map.set('FA', 'France')
map.set('IN','India')

console.log(map)

for(const [key, value] of map){
    console.log(key, ':-', value)
}