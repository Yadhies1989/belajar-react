function fungsiPertama(paramCb) {
    setTimeout(
        () => {
            console.log("Pertama");
            paramCb();
        }, 
        1000
    );
}

function fungsiKedua (){
    console.log("Kedua");
}

fungsiPertama(fungsiKedua);