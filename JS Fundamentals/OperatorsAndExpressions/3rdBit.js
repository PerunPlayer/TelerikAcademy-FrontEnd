function solve(args){
  var num = parseInt(args[0]),
      mask = 1 << 3,
      result = num & mask,
      bit = result >> 3;
  console.log(bit);
}
