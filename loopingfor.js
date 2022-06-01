const arr = ["ini", "cuma", "tulisan", "saja", "Tambahan"];

const panjangArr = arr.length;

// index adalah counter initial untuk perulangan
// index < 4 adalah kondisi dimana perulangan selesai
// index++ adalah inkremental yang dilakukan
//   agar perulangan bisa selesai
for (let index = 0; index < panjangArr; index++) {
  // ini adalah aksi yang dilakukan
  // sampai perulangan selesai
  console.log(arr[index]);
}