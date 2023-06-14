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
//callback function fibonachi asyncronous
function fibonachiAsync(x, callback) {
  setTimeout(() => {
    const result = fibonachi(x);
    callback(result);
  }, 0);
}

//promise function fibonachi asyncronous
function fibonachiPromise(x) {
  return new Promise((resolve, reject) => {
    //const result = fibonachi;
    fibonachiAsync(x, function (result) {
      resolve(result);
    });
  });
}

//function fibonachi
function plusPromise(a, b) {
  return a + b;
}

//callback function fibonachiAsync
function plusAsync(a, b, callback) {
  setTimeout(() => {
    const result = plusPromise(a, b);
    callback(result);
  }, 0);
}

//promise function fibonachiAsync
function plusPromise(a, b) {
  return new Promise((resolve, reject) => {
    //const result = plusAsync(a, b);
    plusAsync(a, b, function (result) {
      resolve(result);
    });
  });
}

//error handling promise

function fibonachiPromiseError(x) {
  return new Promise(function (resolve, reject) {
    fibonachiAsync(x, function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
}

function plusPromise(a, b) {
  return new Promise(function (resolve, reject) {
    plusAsync(a, b, function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
}

//assign promise function fibonachiPromise and plus promise
async function main() {
  const hasilFibonachi10 = await fibonachiPromise(10);
  console.log("hasil fibonachi10 = ", hasilFibonachi10);
  const hasilTambah1 = await plusPromise(hasilFibonachi10, 10);
  const hasilTambah2 = await plusPromise(hasilTambah1, 10);
  console.log("hasil pertambahan = ", hasilTambah2);
  const hasil = await plusPromise("a", 10);
  console.log(hasil);
}

main()
  .then()
  .catch((err) => {
    console.log("error", err.message);
  });
