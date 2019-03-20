function urutkanAbjad(str) {
  // you can only write your code here!
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var la = alpha.length;
  var ls = str.length;
  var i = 0;
  var count = [];
  while (i < ls){
    var j = 0;
    while (j < la){
        if (str[i] == alpha[j]){
            count.push(j);
        }
        j++;
    }
    i++;
  }

  var l = count.length;
  for (var i = 0; i < l; i++) { 
      for (var j = 0; j < (l - i - 1); j++) { 
          if(count[j] > count[j+1]) {
              var tmp = count[j];
              count[j] = count[j+1];
              count[j+1] = tmp;
          }
      }        
  }

var i = 0;
var result = '';
while (i < l){
    result += alpha[count[i]]
    i++
}
  return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'