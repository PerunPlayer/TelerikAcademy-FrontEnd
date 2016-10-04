function solve(args) {
	var D,
		  x1,
		  x2,
      x,
		  a = parseFloat(args[0]),
		  b = parseFloat(args[1]),
		  c = parseFloat(args[2]);

	D = (b * b) - (4 * a * c);

	if (D < 0) {
		console.log("no real roots");
	} else if (D === 0) {
		x = -b / (2 * a);
		console.log("x1=x2=" + x.toFixed(2));
	} else {
		x1 = (-b - Math.sqrt(D)) / (2 * a);
		x2 = (-b + Math.sqrt(D)) / (2 * a);

		console.log("x1=" + x1.toFixed(2) + "; " + "x2=" + x2.toFixed(2));
	}
}
