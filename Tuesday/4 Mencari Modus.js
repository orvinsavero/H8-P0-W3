function cariModus(arr) {
  // you can only write your code here!
  var i = 0;
  var l = arr.length;
  var result = 0;
  var count = 0;
  var output = [];
  while (i < l) {
    var j = i + 1;
    while (j < l) {
      if (arr[i] == arr[j]) {
        output.push(arr[j]);
        result = output[0];
        count++;
      }
      j++;
    }
    i++;
  }
  if (count >= l) {
    result = -1;
  } 
  else if (count == 0) {
    result = -1;
  } 
  return result;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
