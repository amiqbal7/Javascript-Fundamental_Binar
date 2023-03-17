function checkEmail(email) {
  //cek input
  if (email === undefined) {
    return "ERROR : There is no email to check";
  }
  // cek data type
  if (typeof email !== "string") {
    return "ERROR : Email should be a string";
  }
  // cek kriteria ada simbol '@'
  if (!/[@]/.test(email)) {
    return "ERROR : Email should containt '@' character";
  }
  // cek syarat simbol2
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "VALID";
  } else {
    return "INVALID";
  }
}

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));
console.log(checkEmail(3322));
console.log(checkEmail()); //
