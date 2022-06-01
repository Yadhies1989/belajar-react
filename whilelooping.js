const arr = ["ini", "cuma", "tulisan", "saja", "tambahan"];

// index adalah counter initial untuk perulangan
let index = 0;
// index < arr.length adalah kondisi perulangan selesai
while (index < arr.length) {
  // ini adalah aksi yang dilakukan
  // sampai perulangan selesai
  console.log(arr[index]);
  // index += 1 adalah inkremental yang dilakukan
  //   agar perulangan bisa selesai
  index += 1;
}