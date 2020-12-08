//array string
let jurusan = ["Rekayasa Perangkat Lunak","Teknik Komputer dan Jaringan"]

//array numeric
let tingkatan_kelas = [10,11,12]

//array objek
let siswa = [
    //objek 1
    {
        nama: "Niandini", jurusan: "RPL"
    },
    //2
    {
        nama: "Andin", jurusan: "TKJ"
    },
    //3
    {
        nama: "Ai", jurusan: "RPL"
    },
]

console.log("Jumlah elemen array jurusan = " + jurusan.length);
console.log("Jumlah elemen array tingkatan kelas = " + tingkatan_kelas.length);
console.log("Jumlah elemen array siswa = " + siswa.length);

let kota = ["Malang","Surabaya","Tulungagung"]

console.log("isi array kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);

console.log("-------------");

//tambah data baru
kota.push("Banyuwangi")

console.log("isi array kota saat ini");
console.log(kota);
console.log("Jumlah data saat ini = " + kota.length);

//hapus data
kota.splice(2,1)

let barang = [
    { nama: "Pecel", harga: 5000},
    { nama: "Soto", harga: 10000}
]

console.log("isi array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

console.log("-------------------------")

//tambah data baru
barang.push(
    { nama: "Motlo", harga: 10000 }
)

console.log("isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);

let siswa = [
    {nama_depan = "Hero", nama_belakang: "Fiennes"},
    {nama_depan = "Alex", nama_belakang: "Lawther"},
    {nama_depan = "Aron", nama_belakang: "Piper"},
]

//menmpilkan nama lengkap array
siswa.map(
    (sis, index) => {
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)
