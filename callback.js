filterAngka = function (param1, param2) {
    let hasil = [];

    for (let counter = 0 ; counter < param1.length; counter++) {
        // if (param1[counter] % 2 === 1) {
        if (param2(param1[counter])) {
            hasil.push(param1[counter]);
        }
    }

    return hasil;
  };

  angkaGanjil = function (intAngka) {
      return intAngka % 2 === 1;
  }
  angkaGenap = function (intAngka) {
    return intAngka % 2 === 0;
}
  
const angka = [1,2,3,4,5,6,7,8,9,10];

console.log(filterAngka(angka, angkaGanjil));
console.log(filterAngka(angka, angkaGenap));

console.log(angkaGanjil(angka));