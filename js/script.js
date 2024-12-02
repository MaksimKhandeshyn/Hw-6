//--1--
let number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}
//--2--
let i = 2;
for (; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
// --3--
let a = 0;
for (; a <= 10; a++) {
  let sum = a * 7;
  console.log(`${a} * 7 = ${sum}`);
}
// --4--
let numb = 1;
while (numb <= 5) {
  console.log(numb);
  numb++;
}
// --5--
let c = 1;
for (; c <= 10; c++) {
  if (c === 7) {
    break;
  }
  console.log(c);
}
//--6--
let n = Math.max(20);
let secondNum = 0;
for (; secondNum <= n; secondNum++) {
  if (secondNum >= n) {
    console.log(secondNum);
    break;
  }
}
// --7--
let d = 1;
while (d <= 20) {
  d++;
  if (d % 3 === 0) {
    continue;
  }
  console.log(d);
}
