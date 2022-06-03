const sebuahAngka = NaN;
const AngkaBulat = "999";
const AngkaDesimal = "64.646464";
const stringAngkaDesimal = AngkaDesimal.toString();

const arrString = stringAngkaDesimal.split(".");

const arrayString = ["ini", "adalah", "kumpulan", "karakter", "dalam", "array"];
arrayString.push("baru");

// function gabungan

let arrayGabungan = arrayString.sort().reverse().join("-").toUpperCase();

if (isNaN(sebuahAngka)) {
  console.log("ini sebuah angka");
}

// math

const intDesimal = 9.42;
const angkaDadu = Math.ceil(Math.random() * 6);

// console.log(AngkaBulat);

// console.log(parseInt(AngkaBulat));

// console.log(parseFloat(AngkaDesimal).toFixed(2));

// console.log(stringAngkaDesimal.split("."));

// console.log(arrString.join(""));

// console.log(arrayString.join("+"));

// console.log(arrayGabungan);

console.log(angkaDadu);
console.log(Math.floor(intDesimal));
console.log(Math.ceil(intDesimal));
