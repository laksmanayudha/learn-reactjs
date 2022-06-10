function readBooks(time, book, callback) {
    console.log("saya membaca " + book.name);
    setTimeout(function (){
        let sisaWaktu = 0;
        if (time >= book.timeSpent) {
            sisaWaktu = time - book.timeSpent;
            console.log("saya sudah membaca " + book.name + ", sisa waktu saya " + sisaWaktu)
            callback(sisaWaktu) // menjalankan function callback
        }else{
            console.log('waktu saya habis');
            callback(time)
        }
    }, book.timeSpent);
}

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
];

// Tulis code untuk memanggil function readBooks di sini ( menggunkan callback )
// readBooks(10000, books[0], sisaWaktuBaru => {
//     readBooks(sisaWaktuBaru, books[1], sisaWaktuBaru => {
//         readBooks(sisaWaktuBaru, books[2], sisaWaktuBaru => {
//             readBooks(sisaWaktuBaru, books[3], sisaWaktuBaru => {

//             });
//         });
//     });
// });

const executeReadBooks = (waktu, index) => {
    if(waktu > 0){
        readBooks(waktu, books[index], sisaWaktuBaru => {
            executeReadBooks(sisaWaktuBaru, index+1)
        })
    }
}
executeReadBooks(10000, 0);