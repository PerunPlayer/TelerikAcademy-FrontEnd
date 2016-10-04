function solve(args){
  var num = parseInt(args[0]);
  var result = (num / 100) % 10 | 0;

  if (result === 7) {
    console.log("true");
  }
  else {
    console.log("false " + result);
  }
}
