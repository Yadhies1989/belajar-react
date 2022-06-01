// inisialisasi objek
const obj = {'a': 1, 'b': 2, 'c': 3};
// inisialisasi Map
let map = new Map();

// menambahkan data
map.set('halo', 'dunia');
map.set(1, 'satu');
map.set(obj, 'lho ini bisa?');

// mengakses data
console.log(map.get('halo'));
console.log(map.get(1));
console.log(map.get(obj));