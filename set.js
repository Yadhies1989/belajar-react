// inisialisasi Set
let set = new Set();

let muridPertama = { nama: 'Mari' };
let muridKedua = { nama: 'Regal' };

// memasukkan data ke dalam set
set.add(muridPertama);
set.add(muridKedua);
set.add(muridPertama);

console.log(set.size); // tetap 2, bukan 3