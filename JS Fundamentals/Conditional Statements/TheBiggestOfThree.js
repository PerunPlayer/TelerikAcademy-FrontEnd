function solve(args) {
    var a = parseFloat(args[0]);
        b = parseFloat(args[1]);
        c = parseFloat(args[2]);

    if (a >= b) {
        if (a >= c) {
            console.log(a);
        } else {
            console.log(c);
        }
    } else if (a <= b) {
        if (b >= c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }
}
