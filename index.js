function receivesAFunction(param) {
  return param()
}

function returnsANamedFunction() {
  return function myFuncion() { }
}

function returnsAnAnonymousFunction() {
  return function () { }
}