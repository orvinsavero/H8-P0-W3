function ubahHuruf(kata) {
  // you can only write your code here!
  var alph = 'abcdefghijklmnopqrstuvwxyz';
  var a = 0;
  var n = '';
  
  for(var i = 0; i < kata.length; i ++) {
    a = alph.indexOf(kata[i]);
    n += alph[a+1];
  }
  return n;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu