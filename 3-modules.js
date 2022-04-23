// CommonTS -> Every file is module (by default)
// Modules  -> Encapsulated Code ( only share Minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-style')

require('./7-mind-expo')
console.log(names);
sayHi('Ganesh')
sayHi(names.name1)
sayHi(names.name2)