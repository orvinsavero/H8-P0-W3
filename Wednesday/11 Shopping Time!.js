function shoppingTime(memberId, money) {
  // you can only write your code here!
  
  if (memberId == ''){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }
  else if (money < 50000){
    return 'Mohon maaf, uang tidak cukup';
  }
  else if (memberId == null && money == null){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }
  else {
  var obj = {};
  var sepatu = 1500000;
  var bajuZ = 500000;
  var bajuH = 250000;
  var sweater = 175000;
  var caseHP = 50000
  var purchased = [];

  obj.memberId = memberId;
  obj.money = money;

  if (money >= sepatu){
    purchased.push('Sepatu Stacattu')
    money -= sepatu;
  }
  if (money >= bajuZ){
    purchased.push('Baju Zoro')
    money -= bajuZ;
  }
  if (money >= bajuH){
    purchased.push('Baju H&N')
    money -= bajuH;
  }
  if (money >= sweater){
    purchased.push('Sweater Uniklooh')
    money -= sweater;
  }
  if (money >= money){
    purchased.push('Casing Handphone')
    money -= caseHP;
  }
  obj.listPurchased = purchased;
  obj.changeMoney = money;

  return obj
}
}


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja