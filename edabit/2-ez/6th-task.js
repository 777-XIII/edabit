function whichIsLarger(f, g) {
  const fValue = f();
  const gValue = g();

  if (fValue > gValue) {
    return "f";
  } else if (gValue > fValue) {
    return "g";
  } else {
    return "neither";
  }
}

console.log(
  whichIsLarger(
    () => 5,
    () => 10
  )
);
console.log(
  whichIsLarger(
    () => 25,
    () => 25
  )
);
console.log(
  whichIsLarger(
    () => 505050,
    () => 5050
  )
);

console.log(
  whichIsLarger(
    () => 100,
    () => 105
  )
);
