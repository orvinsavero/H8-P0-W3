function checkAB(num) {
  // you can only write your code here!
  var i = 0;
  var l = num.length
  var a = [];
  var b =[];
  while (i < l){
      if (num[i] == 'a'){
        a.push(i)
      }
      else if (num[i] == 'b'){
        b.push(i)
      }
      i++
  }

  var la = a.length;
  var lb = b.length;
  var j = 0;
  while (j < la){
      var k = 0;
      while (k < lb){
        if (a[j] - b[k] == 4){
            return true
        } 
        else if (a[j] - b[k] == -4){
            return true
        }
          k++;
      }
      j++;
  }
   return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false