const gabungKata = (kataYangInginDigabung) => {
    return new Promise((resolve, reject) => {
        if (kataYangInginDigabung === null) {
            reject("maaf katanya error");
        }else {
            resolve(kataYangInginDigabung);
        }
    })
}

const arrayKata = ['Hello', 'World', 'Coba', 'Gabung', 'Kata'];

(async () => {
    try {
        const hasilPertama = await gabungKata(arrayKata[0]);

        const hasilGabungan1 = await gabungKata(hasilPertama + ' ' + arrayKata[1]);

        const hasilGabungan2 = await gabungKata(hasilGabungan1 + ' ' + arrayKata[2]);

        const hasilGabungan3 = await gabungKata(hasilGabungan2 + ' ' + arrayKata[3])

        const hasilTotal = await gabungKata(hasilGabungan3 + ' ' + arrayKata[4]);

    // setelah selesai semua, tinggal
    console.log(hasilTotal);
    } catch (err) {
 console.log(err);
    }
})();