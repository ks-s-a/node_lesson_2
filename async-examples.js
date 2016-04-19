// Async examples
var async = require('async');
var fs = require('fs');

// File name for processing
var FILE_NAME = 'test-file.txt'

// Describe actions one by one
async.waterfall([
    function(callback) {
      // Take some information about file
      fs.stat(FILE_NAME, callback)
    },
    function(stat, callback) {
      console.log('is it file? ', stat.isFile());

      if ( !stat.isFile() )
        throw new Error;

      // Append data to our file
      fs.appendFile(FILE_NAME, '\nour sweety string', callback);
    }
], function (err, result) {
    console.log('OMG! Error is happend: ', err);
});
