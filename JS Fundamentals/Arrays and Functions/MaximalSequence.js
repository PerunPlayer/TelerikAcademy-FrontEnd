function solve(args) {
    var arr = args[0].split('\n');
    var count = +arr[0];

    var longest = 0;
    for (var j = 0; j < arr.length; j++) {
        var sum = 1;
        for (var k = j + 1; k < arr.length; k++) {
            if (arr[j] == arr[k]) {
                sum++;
            } else {
                break;
            }
        }
        if (sum > longest) {
            longest = sum;
        }
    }
    console.log(longest);
}
