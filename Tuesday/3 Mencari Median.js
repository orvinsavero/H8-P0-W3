function cariMedian(arr) {
  // you can only write your code here!
  var i = 0;
  var l = arr.length;
  var result = 0;
  var output = 0;
  while (i <= l){
      if (l % 2 != 0){
        result = (l + 1) / 2;
        output = arr[result-1];
      }
      else if (l % 2 == 0){
        result = (l + 1) / 2;
        var a = Math.floor(result-1);
        var b = Math.ceil(result-1);
        output = (arr[a] + arr[b]) / 2 
      }
      i++
  }
  return output;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5