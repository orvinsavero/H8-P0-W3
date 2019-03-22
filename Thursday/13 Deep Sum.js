function deepSum (arr) {
    // Code disini
    var i = 0;
    var l1 = arr.length
    var output = 0;

    while (i < l1){
        var j = 0;
        var l2 = arr[i].length
        while (j < l2){
            var k = 0;
            var l3 = arr[i][j].length;
            while (k < l3){
                output = output + arr[i][j][k];
                k++;
            }
            j++;
        }
        i++;
    }
    if (output == 0){
        return 'No number';
    }
    return output;
  }
  
  //TEST CASE
  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316
  
  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number