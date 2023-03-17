function checkTypeNumber(i) {
  // cek param
  if (i === undefined) {
    return "ERROR : Bro where is the parameter ?";
  } // cek data type
  if (typeof i == "number") {
    // proses
    if (i % 2 === 0) {
      return i + " genap";
    } else {
      return i + " ganjil";
    }
  } else {
    return "ERROR : invalid data type";
  }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
