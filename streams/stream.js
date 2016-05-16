var fs = require('fs');

var readStream = fs.createReadStream('lorem.txt');

readStream.setEncoding('utf8');

var counter = 0;

readStream.once('data', function(datacoming){ //when data is recieved
  counter = counter + 1;
  if(counter === 5){
    readStream.pause()
  }
  // console.log(datacoming);
});
readStream.on('end', function(){ //when it ends
  console.log(counter);
});

var writeStream = fs.createWriteStream('copyl.txt');
// writeStream.write('Hi Ryan');

readStream.pipe(writeStream)
