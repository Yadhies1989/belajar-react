const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate

const createDate = function (dates, counter) {
  let hasil = [];
  for (let counter = 0; counter < dates.length; counter++) {
    // Date.parse(dates[counter]);
    hasil.push(Date.parse(dates[counter]) / 1000);
    // hasil[counter] = (hasil[counter] / 1000).toString();
  }
  //   if (counter != null) {
  //     return hasil[counter].toString();
  //   } else {
  //     return hasil[counter].sort().join("-").toString();
  //   }
  if (counter != null) {
    return hasil[counter].toString();
  } else {
    return hasil.sort().join("-").toString();
  }
};

console.log(createDate(dates, 3));
console.log(createDate(dates));
