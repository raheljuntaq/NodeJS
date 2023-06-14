//sincronous function
function fibonachi(x) {
  let number = 1;
  let temporary = 0;
  for (let i = 0; i < x; i++) {
    //console.log(temporary, '+', number, '=', number + temporary); --> handling output
    let hasil = temporary + number;
    temporary = number;
    number = hasil;
  }
  return number;
}

//callback function fibonachi asyncronous
function fibonachiAsync(x, callback) {
  setTimeout(() => {
    const result = fibonachi(x);
    callback(result);
  }, 0);
}

//function pertambahan
function plus(a, b) {
  return a + b;
}

//callback function fibonachiAsync
function plusAsync(a, b, callback) {
  setTimeout(() => {
    const result = plus(a, b);
    callback(result);
  }, 0);
}

fibonachiAsync(1000, function (result) {
  console.log(`fibonachi`, result);
});

const hasilFibonachi10 = fibonachi(10);

console.log("fibonachi 10", hasilFibonachi10);

console.log("======================batas-async-callback==========================");

//callback function multiAsync
fibonachiAsync(10, function (result) {
  plusAsync(result, 10, function (hasilTambah) {
    console.log("hasil pertambahan", hasilTambah);
    plusAsync(result, 10, function (hasilTambah) {
      console.log("hasil pertambahan", hasilTambah);
    });
  });
});

