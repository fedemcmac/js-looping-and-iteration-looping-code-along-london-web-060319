// Code your solutions in this file

function writeCards(namesArr, event) {
    let thanksArr = [];
    for (let i = 0; i < namesArr.length; i++) {
        thanksArr.push(`Thank you, ${namesArr[i]}, for the wonderful ${event} gift!`);
    }
    return thanksArr
}

function countdown(num) {
    while (num > -1) {
        console.log(num--)
    }
}