function AppearanceCount(args) {
  var N = args.shift(),
       num = args.pop(),
       numArr = args[0].split(' ').map(Number);


   function NumberAppearanceCount(number, array) {
       var count = 0;

       for (var i = 0; i < array.length; i += 1) {
           if (array[i] === number) {
               count += 1;
           }
       }
       return count;
   }


   console.log(NumberAppearanceCount(+num, numArr));
}
