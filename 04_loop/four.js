const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
   console.log(` keys ${key} :-  value ${myObject[key]}`)
}