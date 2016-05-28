// process - корневой объект в node.js
console.log('process object is: ', process);

// Обработка аргументов скрипта стандарными средствами
var args = process.argv;
console.log('args is: ', args);

// Использование модуля minimist
var args = require('minimist')(process.argv.slice(2));
console.log('args is: ', args);
