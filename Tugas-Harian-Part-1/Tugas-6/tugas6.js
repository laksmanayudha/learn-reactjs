// soal 1
/*
nilai >= 80 indeksnya A
nilai >= 70 dan nilai < 80 indeksnya B
nilai >= 60 dan nilai < 70 indeksnya c
nilai >= 50 dan nilai < 60 indeksnya D
nilai < 50 indeksnya E
*/ 

var nilaiJohn = 80;
var nilaiDoe = 50;

// nilai john
if(nilaiJohn >= 80){
    console.log(`nilai John indeksnya A`)
}else if(nilaiJohn >= 70 && nilaiJohn < 80){
    console.log(`nilai John indeksnya B`)
}else if(nilaiJohn >= 60 && nilaiJohn < 70){[
    console.log(`nilai John indeksnya C`)
]}else if(nilaiJohn >= 50 && nilaiJohn < 60) {
    console.log(`nilai John indeksnya D`)
}else{
    console.log(`nilai John indeksnya E`)
}

// nilai Doe
if(nilaiDoe >= 80){
    console.log(`nilai Doe indeksnya A`)
}else if(nilaiDoe >= 70 && nilaiDoe < 80){
    console.log(`nilai Doe indeksnya B`)
}else if(nilaiDoe >= 60 && nilaiDoe < 70){[
    console.log(`nilai Doe indeksnya C`)
]}else if(nilaiDoe >= 50 && nilaiDoe < 60) {
    console.log(`nilai Doe indeksnya D`)
}else{
    console.log(`nilai Doe indeksnya E`)
}


// soal 2
var tanggal = 22;
var bulan = 7;
var tahun = 2020;

switch(bulan){
    case 1: {bulan = "Januari"}
    case 2: {bulan = "Februari"}
    case 3: {bulan = "Maret"}
    case 4: {bulan = "April"}
    case 5: {bulan = "Mei"}
    case 6: {bulan = "Juni"}
    case 7: {bulan = "Juli"}
    case 8: {bulan = "Agustus"}
    case 9: {bulan = "September"}
    case 10: {bulan = "Oktober"}
    case 11: {bulan = "November"}
    case 12: {bulan = "Desember"}
}
console.log(`${tanggal} ${bulan} ${tahun}`);


// soal 3
console.log("LOOPING PERTAMA");
for(let i = 2; i <= 20; i += 2){
    console.log(`${i} - I Love Coding`);
}

console.log("LOOPING KEDUA");
for(let i = 20; i >= 2; i -= 2){
    console.log(`${i} - I will become a frontend developer`);
}

// soal 4
for(let i = 1; i <= 20; i++){
    if ( i % 3 == 0 && i % 2 == 1 ){
        console.log(`${i} - I Love Coding`)
    }else if ( i % 2 == 1 ){
        console.log(`${i} - Santai`)
    }else{
        console.log(`${i} - Berkualitas`)
    }
}


// soal 5
for(let i = 1; i <= 7; i++){
    let bintang = '';
    for(let j = 1; j <= i; j++){
        bintang += '#';
    }
    console.log(bintang);
}