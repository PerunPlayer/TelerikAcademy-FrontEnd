function solve(args) {
    let heights = args[0].split(" ").map(Number);
    let size = heights.lenght;
    let sum = 0;

    //find peaks
    function finding(heights) {
        peaks = new Array();
        for (i = 1; i < heights.length - 1; i++) {
            if (heights[i - 1] < heights[i] && heights[i + 1] < heights[i]) {
                peaks.push(i);
            }
        }
    }
    //make sum
    function functionName(heights, peaks) {
      for (var i = 0; i < peaks.length; i++) {
        peaks[i] += sum;
      }
    }
    //find max sum


    console.log(sum);
}
