const arrAngka = [1, 2, 3, 4, 5];
// di sini callback forEach menerima sebuah parameter
// yaitu function callback
// yang menerima minimal 1 parameter, maksimal 3 parameter
// parameter ke-1: nama dari element
// parameter ke-2: indeks / urutan ke berapa (OPTIONAL)
// parameter ke-3: array yang sedang di looping (OPTIONAL, JARANG DIPAKAI)
arrAngka.forEach((aliasUntukElement) => {
  console.log("Hasil kali duanya adalah: " + aliasUntukElement * 2);
});
// di sini kita mencoba menggunakan parameter ke-1 dan ke-2
arrAngka.forEach((alias, urutanKeBerapa) => {
  console.log("Urutan : " + urutanKeBerapa + " Kali 3: " + alias * 3);
});

arrAngka.forEach((value, index) => {
  console.log("Urutan : " + index + " Kali 5: " + value * 5);
});
