// soal 1
let dataPeserta = ["john", "laki-laki", "programmer", "30"];
let [nama, jenisKelamin, pekerjaan, umur] = dataPeserta;
let output = `Halo, nama saya ${nama}. saya ${jenisKelamin} berumur ${umur} bekerja sebagai seorang ${pekerjaan}`;

// "Halo, nama saya john. saya laki-laki berumur 30 bekerja sebagai seorang programmer"
console.log(output)


// soal 2
let array1 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"];
for(let i = 0; i < array1.length; i++){{ 
    console.log(array1[i]);
 }}

 // soal 3
 let array2 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];
 for(let i = 0; i < array2.length; i++){
     if( array2[i] % 2 == 0 ){
         console.log(array2[i]);
     }
 }


// soal 4
let kalimat= ["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"];
kalimat.splice(2, 1);
kalimat.shift()
console.log(kalimat.join(" "));


// soal 5
/*
Kangkung
Bayam
Buncis
Kubis
Timun
Seledri
Tauge
*/
var sayuran=[];
sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge");
sayuran.sort()
for(let i = 0; i < array1.length; i++){{ 
    console.log(`${i+1}. ${sayuran[i]}`);
 }}

