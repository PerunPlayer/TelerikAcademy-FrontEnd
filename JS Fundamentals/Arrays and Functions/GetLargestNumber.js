function GetLargestNumber(args) {
  var input = args[0].split(" ").map(Number),
      first = input[0],
      second = input[1],
      third = input[2];

  if (GetMax(first, second) > third) {
    return GetMax(first, second);
  }
  else {
    return third;
  }

  function GetMax(first, second) {
    if (first>second) {
      return first;
    }
    else {
      return second;
    }
  }
}
