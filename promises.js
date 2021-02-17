function num1() {
    return 1;
}
async function num2() {
    return 2;
}

// console.log('num1', num1());
// console.log('num2', num2());
// num2().then(res => console.log(res));

async function waiting() {
    const value = await num2();
    console.log('waiting', value);
}
// waiting();
async function waitForMyPromise() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!!!');
        }, 1000)
    });

    const result = await promise;
    console.log('my promise is', result);
}

waitForMyPromise();

new Promise((resolve) => {
    setTimeout(() => {
        resolve('done!');
    }, 1500)
}).then(r => console.log('then my other promise is', r));

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function waiting() {
    await wait(2000);
    console.log("message here");
}

waiting();
