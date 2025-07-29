const fetchData = callback => {
    setTimeout(() => {
        callback('Fetch data Done!')
    }, 1500)
}

setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text)
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');


//--------------------------

const fetchData2 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!')
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    console.log('Timer is done!');
    fetchData2()
        .then(text => {
            console.log(text);
            return fetchData2();
        })
        .then(text2 => {
            console.log(text2);
        })
}, 2000);

console.log('Hello!');
console.log('Hi!');