function solve(args) {
  var arr = args[0].split("\n"),
      charsA = arr[0],
      charsB = arr[1];

  if (charsA>charsB) {
    console.log('>');
  }
  else if (charsA<charsB) {
    console.log('<');
  }
  else {
    console.log('=');
  }
}
