const arrAngka = [10, "string"];

// fungsi deklarasi
const fnOperasiMatematika = (arrAngka, fnCallback) => {
  console.log("Fungsi Dijalankan");

  if (arrAngka.length !== 2) {
    fnCallback("jumlah array angka lebih dari 2", null);

    return;
  }

  for (let counter = 0; counter < arrAngka.length; counter++) {
    if (isNaN(arrAngka[counter])) {
      fnCallback("array posisi ke" + counter + "bukan suatu angka", null);

      return;
    }
  }
  fnCallback(null, arrAngka);
};

// IIFE

(() => {
  const arrAngka = [10, 20, 50];
  fnOperasiMatematika(arrAngka, function cbPenjumlahan(err, data) {
    if (err) {
      console.log("error terjadi:", err);
    } else {
      const angkaPenjumlahan = data[0] + data[1];
      console.log("Penjumlahannya Adalah:", angkaPenjumlahan);
    }
  });
})();
