function isPrime(numberToCheck){
  var start = 2;
  var end = numberToCheck - 1;
  for(var current = start; current <= end / 2; current = current + 1) {
    if (numberToCheck%current == 0) {
      return false;
    } 
  }
  return true;    
}

var max = 1000000;

var primeList = [];
for(var current = 7; current < max; current++) {
  if (isPrime(current)) {
    primeList.push(current);
  }
  if (current % 10000 == 0) {
    console.log(current)
  }
}

console.log('wow')

var accumulator = 0;
var addedPrimes = [];

for (var i = 0; i < primeList.length; i++) {
  if(accumulator < max - primeList[i]) {
    accumulator = accumulator + primeList[i];
    addedPrimes.push(primeList[i]);
  }
}

while (!isPrime(accumulator)) {
  accumulator = accumulator - addedPrimes.pop()
}

console.log(accumulator)