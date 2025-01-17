let promise = new Promise((resolve, reject) => {
    console.log('I am a promise');
    // reject('some error')
})







function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 1000)
}

// getData(1)
// getData(2)
// getData(3)

// callback hell
// getData(1, () => {
//     console.log('getting data 2...')
//     getData(2, () => {
//         console.log('getting data 3...')
//         getData(3)
//     })
// })

// getData(1 , function getNextData() {
//     console.log('get data 2..');
//     getData(2)
// })