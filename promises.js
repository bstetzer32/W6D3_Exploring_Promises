function num1() {
    return 1;
}
async function num2() {
    return 2;
}

console.log('num1', num1());
console.log('num2', num2());
num2().then(res => console.log(res));

async function waiting() {
    const value = await num2();
    console.log('waiting', value);
}
waiting();
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

const tryRandomPromise = (random) => new Promise((resolve, reject) => {
    if (random > 0.5) {
        resolve('success!!!');
    } else {
        reject('random error');
    }
});

async function stuff(i) {
    const random = Math.random();
    try {
    await wait(2000 + random*1000)
    const result = await tryRandomPromise(random)
    console.log('random try #', i, result)
    } catch (error) {
    console.error('random try #', i, error)}
}

for (let i=1; i<10; i++) {

    stuff(i);

}

setTimeout(() => {console.log('END OF PROGRAM')}, 5000);