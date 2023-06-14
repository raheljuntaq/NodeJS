//sincronous function
function fibonachi(x) {
  let number = 1;
  let temporary = 0;
  for (let i = 0; i < x; i++) {
    let hasil = temporary + number;
    temporary = number;
    number = hasil;
  }
  return number;
}

//promise function fibonachi asyncronous
function fibonachiAsync(x) {
  return new Promise((resolve, reject) => {
    const result = fibonachi;
    resolve(result);
  });
}

//function fibonachi
function plus(a, b) {
  return a + b;
}

//promise function fibonachiAsync
function plusPromise(a, b) {
  return new Promise((resolve, reject) => {
    const result = plus(a, b);
    resolve(result);
  });
}
