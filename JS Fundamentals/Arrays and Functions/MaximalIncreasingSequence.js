function solve(args) {
  var arr = args[0].split("\n"),
      n = +arr[0],
      currentSequence = 1,
      maxSequence = 1;

  for (var i = 1; i <= n; i++) {
    if (+arr[i + 1] > +arr[i]) {
      currentSequence += 1;
      if (currentSequence > maxSequence) {
        maxSequence = currentSequence;
      }
    }
    else {
      currentSequence = 1;
    }
  }
  console.log(maxSequence);
}
