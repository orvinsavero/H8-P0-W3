function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789-';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz 0123456789-';
  var i = 0;
  var l = kalimat.length;
  var result = '';
  var space = ' ';
  while (i < l){
      var j = 0;
      var l2 = upperCase.length;
      while (j < l2){
        if (kalimat[i] == upperCase[j]){
            result += lowerCase[j];
        }
        else if (kalimat[i] == lowerCase[j]){
            result += upperCase[j];
        }     
        j++
      }
      i++
  }
  return result
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"