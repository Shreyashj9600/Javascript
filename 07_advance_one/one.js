const myArr = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i <= myArr.length; i++){
    console.log(i)
}


let Arr = [1,2,3,2,3,4]

const duplicates = Arr.filter((ele, ind, arr)=>{
    return arr.indexOf(ele)  !== ind
})

console.log(duplicates)