function changeMe(arr) {
    // you can only write your code here!
    var obj = {};
    var i = 0;
    var l = arr.length;
    var title = '';
    if (arr.length < 1){
        console.log('""');
    }
    else {
    while (i < l){
        title = (i+1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ':';
        obj.firstName = arr[i][0];
        obj.lastName = arr[i][1];
        obj.gender = arr[i][2];
        if (arr[i][3] == null){
            obj.age = 'Invalid Birth Year';
        } else {
            obj.age = 2019 - arr[i][3];
        }
        console.log(title);
        console.log(obj);
        i++;
    }
}
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""