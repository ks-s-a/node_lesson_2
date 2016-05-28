// Работа с файловой системой
var fs = require('fs');

// Получение информации о файле
fs.stat('./env.js', function (err, file) {
  if (err) 
    throw err;

  console.log('file is: ', file);
  console.log('.isFile() is: ', file.isFile());
});

// Чтение файла
fs.readFile('./fileWorks.js', function (err, data) {
  if (err) 
    throw err;

  console.log('data is: ', data.toString());
});

// Добавление данных к файлу
fs.appendFile('./test-file.txt', 'Secret\n', function(err) {
  if (err) 
    throw err;
});

// Запись в файл
fs.writeFile('./test-file.txt', 'tsss...', function(err) {
  if (err) 
    throw err;
});
