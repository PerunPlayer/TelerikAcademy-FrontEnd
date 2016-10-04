function solve(args) {
    var a = parseFloat(args[0]);
        b = parseFloat(args[1]);
        c = parseFloat(args[2]);

    if (a >= b) {
        if (a >= c) {
            if (b >= c) {
                console.log(a + " " + b + " " + c);
            } else {
                console.log(a + " " + c + " " + b);
            }
        } else {
            if (c >= b) {
                console.log(c + " " + a + " " + b);
            } else {
                console.log(b + " " + a + " " + c);
            }
        }
    } else {
        if (b >= c) {
            if (a >= c) {
                console.log(b + " " + a + " " + c);
            } else {
                console.log(b + " " + c + " " + a);
            }
        } else {
            console.log(c + " " + b + " " + a);
        }
    }
}
