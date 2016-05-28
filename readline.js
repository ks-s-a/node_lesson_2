// Пример использования модуля readline
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Выведем информацию в консоль
rl.write('Please, enter a command!\n');

rl.on('line', function(cmd) {
  console.log('"' + cmd + '"? Muhaha!');
  
  this.close(); // закрываем обработчик
});
