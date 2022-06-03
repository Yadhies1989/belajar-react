const globalVar = "luar";

function fLuar() {
  const localVar = "dalam";

  function fDalam() {
    return [globalVar, localVar];
  }

  return fDalam;
}

const fClosure = fLuar();

console.log(fClosure());
