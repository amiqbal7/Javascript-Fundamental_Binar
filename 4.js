function isValidPassword(password) {
  // cek input
  if (password === undefined) {
    console.log("ERROR : there is no password");
    return false;
  }
  // cek typ data
  if (typeof password !== "string") {
    console.log("ERROR : password should be in string type");
    return false;
  }
  // proses
  const isValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  return isValid;
}

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());
