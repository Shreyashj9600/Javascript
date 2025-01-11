// creat a random hexcode 

const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
let intervaId = ""
console.log('interval ID :- ' , intervaId);

const startChangeningColor = () => {
    intervaId = setInterval(changeBgColor, 100)

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
        console.log("START")
    }
}
const stopChangeningColor = () => {
    console.log("STOP")
    clearInterval(intervaId)
    intervaId = null;
    
}

document.querySelector('#start').addEventListener('click', startChangeningColor)

document.querySelector('#stop').addEventListener('click', stopChangeningColor)