// misalnya kita ingin menjumlahkan angka dari 1 sampai 10
let total = 0;
let angka = 1;

// hati hati bisa terjadi infinite loop
while (true) {
  total += angka;
  angka += 1;
  // jika angka sudah lebih dari 10
  if (angka > 10) {
    // kondisi while akan stop bila angka > 10
    break;
  }
}