let nama = "Widya" //menyimpan data string
let umur = 17 //menyimpan data numerik
let pekerjaan = false //menyimpan data boolean

const url = "http://smktelkom-mlg.sch.id"
const port = 8080

let nama_siswa1 = "Aron"
let nis_siswa1 = "111"
let jurusan_siswa1 = "RPL"

let nama_siswa2 = "Alex"
let nis_siswa2 = "222"
let jurusan_siswa2 = "TKJ"

let siswa1 = {
    nis: "111",
    nama: "Aron",
    jurusan: "RPL"
}

let siswa2 = {
    nis: "222",
    nama: "Alex",
    jurusan: "TKJ"
}



//menampilkan nama siswa1
console.log("Nama Siswa 1 = " + siswa1.nama);

//mengubah nama siswa 1 menjadi Lee Dongwook
siswa1.nama = "Aron Piper"

//menampilkan nama setelah diubah
console.log("Nama Siswa 1 = " + siswa1.nama);
