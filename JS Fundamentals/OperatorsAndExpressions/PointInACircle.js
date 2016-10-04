function solve(args) {
    var x = parseFloat(args[0]),
        y = parseFloat(args[1]),
        distance = Math.sqrt((x * x + y * y));

    var radius = 2;
    if (distance <= radius) {
        console.log("yes " + distance.toFixed(2));
    } else {
        console.log("no " + distance.toFixed(2));
    }
}
