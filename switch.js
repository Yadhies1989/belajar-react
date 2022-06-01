const rating = 300;
switch (rating) {
  case 1: console.log("wah cukup buruk"); break;
  case 2: console.log("masih agak buruk yah !"); break;
  case 3:
  case 4:
  case 5:
    console.log("sudah baik nih !"); break;
  default:
    // kode yang akan dieksekusi apabila semua kondisi salah
    console.log("wah tidak mungkin dapat segini nih !");
}
