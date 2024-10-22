/* function bitwiseAND(n1, n2) {
  return (n1 & n2).toString(2).padStart(8, "0");
}

function bitwiseOR(n1, n2) {
  return (n1 | n2).toString(2).padStart(8, "0");
}

function bitwiseXOR(n1, n2) {
  return (n1 ^ n2).toString(2).padStart(8, "0");
}

console.log(("bitwiseAND(6, 23)", bitwiseAND(6, 23)));

console.log(("bitwiseOR(6, 23)", bitwiseOR(6, 23)));

console.log(("bitwiseXOR(6, 23)", bitwiseXOR(6, 23)));

console.log(("bitwiseAND(7, 12)", bitwiseAND(7, 12)));

console.log(("bitwiseOR(7, 12)", bitwiseOR(7, 12)));

console.log(("bitwiseXOR(7, 12)", bitwiseXOR(7, 12))); */

function bitwiseAND(n1,n2) {
  return n1 & n2;
}

function bitwiseOR(n1, n2) {
  return n1 | n2;
}

function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}

console.log(bitwiseAND(7, 12)); // 4
console.log(bitwiseOR(7, 12)); // 15
console.log(bitwiseXOR(7, 12)); // 11
