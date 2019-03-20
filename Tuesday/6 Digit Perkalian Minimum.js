function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var i = 0;
  var result = '';
  var result2 = [];
  while (i <= angka){
      var j = 0;
      while (j <= angka){
          if (i * j == angka){
              result = i.toString() + j.toString();
              result2.push(result);
          }
        j++
      }
    i++
  }
  var min = result2[0].length;
  var j = 0;
  while (j < result2.length){
      if (result2[j].length < min){
          min = result2[j].length
      }
      j++
  }
  return min
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2