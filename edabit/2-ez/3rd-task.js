function matchHouses(step) {
	    return step === 0 ? 0 : 5 * step + 1;
}
console.log(matchHouses(1)); // 6
console.log(matchHouses(2));
console.log(matchHouses(3));
console.log(matchHouses(0)); // 0
console.log(matchHouses(17)); // 86
console.log(matchHouses(36)); // 181