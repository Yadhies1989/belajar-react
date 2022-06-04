const variabelGlobal = 'global';

const fnLuar = () => {
  const variabelLokal = 'lokal';
  const fnDalam = (paramDalam) => {
    return 'halo ' + variabelLokal + ' ' + paramDalam;
  };
  return fnDalam; // tidak diinvoke
};

const fnKembalian = fnLuar(); // return fnDalam
console.log(fnKembalian('ini untuk dalam')); // invoke fnDalam
console.log(fnKembalian('ini dijagain')); // invoke fnDalam