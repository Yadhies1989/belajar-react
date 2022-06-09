const arrInteger = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filter menerima sebuah callback (function)
// yang punya jumlah parameter sama dengan map (min 1, max 3)
const arrGenap = arrInteger.filter((element) => {
  // return kondisi filternya di sini
  // ingat di sini karena kondisi, truthy / falsy yah !
  let kondisiFilter = element % 2 === 0;
  return kondisiFilter;
});
console.log(arrGenap);
// bila arrow function dimanfaatkan maksimal
const arrGanjil = arrInteger.filter((element) => element % 2 === 1);
console.log(arrGanjil);

// contoh kedua

const arrObjAngka = [{ angka: 100 }, { angka: 200 }, { angka: 300 }];

const arrayTerfilter = arrObjAngka.filter((element) => {
  return element.angka < 150;
});

console.log(arrayTerfilter);
