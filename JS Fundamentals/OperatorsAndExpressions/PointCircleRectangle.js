function solve(args) {
    var x = parseFloat(args[0]),
        y = parseFloat(args[1]);

    var xCircle = 1,
        yCircle = 1,
        radius = 1.5,
        xRmin = -1,
        xRmax = 5,
        yRmax = 1,
        yRmin = -1,
        isInRectangle,
        isInCircle;

    if (x <= xRmax && x >= xRmin && y <= yRmax && y >= yRmin) {
        isInRectangle = "inside";
    } else {
        isInRectangle = "outside";
    }

    if ((x - xCircle) * (x - xCircle) + (y - yCircle) * (y - yCircle) <= radius * radius) {
        isInCircle = "inside";
    } else {
        isInCircle = "outside";
    }

    console.log(isInCircle + " circle " + isInRectangle + " rectangle");
}
