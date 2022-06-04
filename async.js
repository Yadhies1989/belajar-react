(function fnAsync() {
    console.log('A');
    console.log('B');
    // setTimeout adalah fungsi, di dalamnya menerima 
    // sebuah parameter fungsi
    setTimeout(function() {
      console.log('Process C');
    }, 1000);
  
    console.log('D');
  })();