/**
 [Instruction]
 Ubah huruf kecil menjadi besar, dan besar menjadi kecil.
 dilarang menggunakan .toUpperCase() dan .toLowerCase()
 gunakan teknik alphabet library!
 */

function switchCharCase(words) {

    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var a = ''
    for (i = 0; i < words.length; i++) {

        for (var j = 0; j <= lower.length; j++)
            if (words[i] == lower[j]) {
                a = a + upper[j];
            }
            else if (words[i] == upper[j]) {
                a = a + lower[j];
            }
        if (words[i] == ' ') {
            a = a + ' '
        }
    }
    return a
}

console.log(switchCharCase('aXBcEf')); //AxbCeF
console.log(switchCharCase('sAyA buKAN AnAK AlAy')); //SaYa BUkan aNak aLaY