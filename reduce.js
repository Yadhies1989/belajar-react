const arrAngka = [2, 4, 6, 8, 10];
// parameter pertama, callback
// parameter kedua, nilaiAwal
const nilaiTerreduce = arrAngka.reduce(
  // ini fnCallback-nya
  (nilaiSebelumnya, nilaiSekarang) => {
    // jangan lupa return
    return nilaiSebelumnya + nilaiSekarang;
  },
  // ini nilaiAwalnya
  8
);
console.log(nilaiTerreduce); // 30
