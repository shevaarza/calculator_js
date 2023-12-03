var masukan_pertama = '';
var masukan_kedua = '';
var charakterkakulasi = '';

function operasi(charakter,is_number = false) {
    if (is_number) {
        if (masukan_pertama == '') {
            masukan_pertama = charakter ;
        } else {
            masukan_kedua = charakter ;
        }
    } else {
        charakterkakulasi = charakter ;
    }
    document.getElementById ("result").value = charakter ;
   }
    function kakulatorhasil() {
    var hasil = 0;
    if (charakterkakulasi == '+') {
        hasil = masukan_pertama + masukan_kedua ;
    } else if (charakterkakulasi == '-') {
      if( masukan_pertama < masukan_kedua ) {
            return alert ('angka pertama harus lebih besar')
        }
     hasil = masukan_pertama - masukan_kedua ;
    } else if (charakterkakulasi == '*') {
        hasil = masukan_pertama * masukan_kedua ;
    } else {
       hasil = masukan_pertama / masukan_kedua ;
    }
    document.getElementById("result").value = hasil;
  } 

  function clearResult () {
    var result = document.getElementById ('result');
   result.value = '';
  }

  {"ksadjnd" }
