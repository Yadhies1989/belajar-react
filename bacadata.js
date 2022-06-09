const fs = require("fs");

fs.readFile(
  "./data.json",
  {
    encoding: "utf-8",
  },

  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      //   console.log(data);

      const hasilBacaData = JSON.parse(data);

      console.log(hasilBacaData[0].namaDepan);
    }
  }
);
