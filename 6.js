function getAngkaTerbesarKedua(dataNumber) {
  // check type data
  if (dataNumber === undefined) {
    return "Error : function need an array parameter";
  }
  // proses
  if (Array.isArray(dataNumber) && dataNumber.length >= 2) {
    let numbers = new Set(
      dataNumber
        .sort((a, b) => {
          return a - b;
        })
        .reverse()
    );
    return Array.from(numbers)[1];
  }
  return "Error";
}

// data
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
