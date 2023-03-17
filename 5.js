// 5
function getSplitName(PersonName) {
  // cek type data
  if (typeof PersonName !== "string") return "ERROR : invalid type data";

  // proses
  const splittedName = PersonName.split(" ");
  if (splittedName.length > 3) {
    return "ERROR : this function only recive 3 character name";
  } else if (splittedName.length === 3) {
    return {
      firstName: splittedName[0],
      middleName: splittedName[1],
      lastName: splittedName[2],
    };
  } else if (splittedName.length === 2) {
    return {
      firstName: splittedName[0],
      middleName: null,
      lastName: splittedName[1],
    };
  } else if (splittedName.length === 1)
    return {
      firstName: splittedName[0],
      middleName: null,
      lastName: null,
    };
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora aureliya Sukma Darma"));
