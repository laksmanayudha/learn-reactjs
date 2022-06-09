// soal 1
const luasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar;
}

const kelilingPersegiPanjang = (panjang, lebar) => {
    return 2 * (panjang + lebar);
}

const volumeBalok = (panjang, lebar, tinggi) => {
    return panjang * lebar * tinggi;
}
 
let panjang= 12;
let lebar= 4;
let tinggi = 8;
 
let HasilluasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
let HasilkelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
let HasilvolumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(HasilluasPersegiPanjang ) 
console.log(HasilkelilingPersegiPanjang )
console.log(HasilvolumeBalok )


// soal 2
const introduce = (...data) => {
    const [nama, umur, jenisKelamin, pekerjaan] = data;
    let panggilan = "Bu"
    if (jenisKelamin == "Laki-Laki"){
        panggilan = "Pak"
    }
    return `${panggilan} ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`;
}

//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis");
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"


// soal 3
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992];
let [nama, jenisKelamin, hoby, tahunLarir] = arrayDaftarPeserta;
let objDaftarPeserta = {nama, jenisKelamin, hoby, tahunLarir};
console.log(objDaftarPeserta);

// soal 4
let dataBuah = [
    {
        nama: "Nanas",
        warna: "Kuning",
        adaBiji: false,
        harga: 9000
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        adaBiji: true,
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: ["Hijau", "Merah"],
        adaBiji: true,
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adaBiji: false,
        harga: 5000
    }
];
let dataBuahFilter = dataBuah.filter( buah => !buah.adaBiji);
console.log(dataBuahFilter)

// soal 5
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
/* Tulis kode jawabannya di sini */
let {name : phoneName, brand : phoneBrand, colors, year} = phone;
let [colorBronze, anotherColor, colorBlack] = colors;

 // kode di bawah ini jangan dirubah atau dihapus
 console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)
 
 
// soal 6
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* Tulis kode jawabannya di sini */ 
let dataBuku = {...buku, ...dataBukuTambahan, warnaSampul: [...buku.warnaSampul, ...warna]}
console.log(dataBuku);



// soal 7
const tambahDataFilm = (...params) => {
    let [nama, durasi, genre, tahun] = params;
    return dataFilm.push({nama, durasi, genre, tahun});
}

let dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)