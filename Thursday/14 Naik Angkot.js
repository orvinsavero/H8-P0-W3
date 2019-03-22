function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var i = 0;
    var l1 = arrPenumpang.length;
    var result = [];
    while (i < l1){
        var output = [];
        var obj = {};
        var j = 1;
        var l2 = arrPenumpang[i].length;
        while (j < l2){
            output.push(arrPenumpang[i][j])
            j++;
        }
        obj.penumpang = arrPenumpang[i][0];
        obj.naikDari = output[0];
        obj.tujuan = output[1];

        var k = 0;
        var l3 = rute.length;
        var range = [];
        while (k < l3){
            var l = 0;
            var l4 = output.length;
            while (l < l4){
                if (rute[k] == output[l]){
                    range.push(k+1)
                }
                l++;
            }
            k++;
        }

        obj.bayar = (range[1]-range[0]) * 2000;
        i++;
        result.push(obj);
    }

    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]