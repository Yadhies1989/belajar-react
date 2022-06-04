const names = ['Halo', 'Angel', 'Nyoman', 'Ketut', 'Aisyah']

filterNama = function (param1, param2) {
    let hasil = [];

    for (let counter = 0 ; counter < param1.length; counter++) {
        // hasil.push((counter + 1) + '.' + ' ' + param2(param1[counter]));
        if (param2(param1[counter])){
            hasil.push((counter + 1) + '.' + ' ' + param1[counter]);
        }
    }

    return hasil;
  };

  sortAscending = function () {
      let hasil = names.sort();
      return hasil ;
  }

  sortDescending = function () {
    let hasil = names.sort().reverse();
    return hasil ;
}

  console.log(filterNama(names, sortAscending));
  console.log(filterNama(names, sortDescending));