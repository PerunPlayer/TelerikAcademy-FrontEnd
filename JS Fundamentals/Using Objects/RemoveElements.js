function solve(args) {
    var toRemove = args[0];

    Array.prototype.removeElement = function(toRemove) {
        var index = this.indexOf(toRemove);
        while (index > -1) {
            this.splice(index, 1);
            index = this.indexOf(toRemove);
        }
        return this;
    };

    console.log(args.removeElement(toRemove).join('\n'));
}
