function solve(args) {
    var a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        h = parseFloat(args[2]);

    var area = (a + b) * h / 2;
    
    console.log(area.toFixed(7));
}
