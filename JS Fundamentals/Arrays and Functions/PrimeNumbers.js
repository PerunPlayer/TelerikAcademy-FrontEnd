function solve(args) {
  var number = +args[0],
      isPrime;

    for (var i = number; i >= 2; i--) {
        isPrime = true;
        for (var j = 2; j <= Math.sqrt(number); j += 1) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) {
            console.log(i);
        }
    }
    console.log(-1);
}
