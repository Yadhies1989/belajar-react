const dataBelanjaan = [
    {
      id: "D-10001",
      nama: "Minyak Goreng Delima",
      harga: 25000,
      kuantitas: 2,
    },
    {
      id: "D-10020",
      nama: "Beras Mamos",
      harga: 48000,
      kuantitas: 1,
    },
    {
      id: "F-00010",
      nama: "Larutan Cap Kaki Empat",
      harga: 7500,
      kuantitas: 8,
    },
  ];

  const listBelanja = (param1) => {
    for (let counter = 0; counter < param1.length; counter++) {
    console.log(param1[counter]);
    }
  };

  listBelanja(dataBelanjaan);

