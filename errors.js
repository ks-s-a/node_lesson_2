try {
  x.let();
}

catch(err) {
  console.log('err is: ', err);
}

finally {
  console.log('Any way code...');
}

process.on('uncaughtException', function(err) {
  console.log('Are you kidding me??? This is a crazy error! : ', err);
});
