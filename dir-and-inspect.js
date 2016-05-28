// Вывод объектов с большой вложенностью

var util = require('util');

var data = {
  1: {
    1: {
      1: {
        obj: {
          string: 'string',
        },
      }
    },
  },
};

// util.inspect позволяет преобразовать объект к строке
// с заданным уровнем вложенности
var output = util.inspect(data, {
  depth: null,
});

console.log('output ' , output);

// Метод console.dir позволяет вывести один объект
// с заданным уровнем вложенности
console.dir(data, {
  depth: null,
});

