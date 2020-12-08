for (let index = 1; index <= 10; index++) {
    console.log("Perulangan ke-" + index)
}
let siswa = {
    nama: "Niandini",
    gender: "Perempuan",
    jurusan: "RPL",
    usia: "17",
    alamat: "Malang"
}

for (key in siswa){
    console.log(key);
}
let presiden = ["Megawati", "SBY", "Jokowi"]
for (pres of presiden) {
    console.log(pres)
}
let laptop = ["Acer", "Asus", "MSI"]
let i = 0
while(laptop[1]){
    console.log(laptop[i])
    i++
}
let gadget = ["Samsung", "Oppo", "Xiaomi"]
let i = 0
do{
    console.log(laptop[i])
    i++
}while(gadget[i])
