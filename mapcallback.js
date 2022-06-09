const arrString = ["kita", "Sedang", "Belajar", "Array", "Map"];

const arrModif = arrString.map((element) => {
  return element + element.length;
});

const arrModif2 = arrString.map((element) => element + element.length);

console.log(arrModif2);
