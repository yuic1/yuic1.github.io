function averageThreeNumbers(a,b,c) {
    let sum = a+b+c;
    let average = sum/3;
    return average;
}

function createSentence(num,noun) {
    let sentence = "On average, a Berkeley student has" + " " + num + " " + noun;
    return sentence;
}

function getRandomNum(max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min) + min);
}


let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x,y,z);


let sentence = createSentence(avg,"racoons");

console.log(sentence);