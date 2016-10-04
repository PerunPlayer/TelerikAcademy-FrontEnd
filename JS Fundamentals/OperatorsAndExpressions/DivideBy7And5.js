function solve(args){
  var num = parseInt(args[0]);

  if (num % 5 === 0 && num % 7 === 0) {
    console.log("true " + args[0]);
  }
  else{
    console.log("false " + args[0]);
  }
}
