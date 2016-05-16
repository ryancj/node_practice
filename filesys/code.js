//Async (Preferred Way)

// var fs = require('fs'); //access the pre bundled module fs
//
// fs.readFile('text.txt', 'utf8', function(err, data){ //utf8 or it will return binary/buffer
//   if(err){
//     console.log(err);
//   }
//   console.log(data);
// });
//
// fs.writeFile('../../text2.txt', 'Some text', 'utf8', function(err, data){
//   if(err){ console.log (err)}
//   console.log(data)
// });

//Sync Approach

var fs = require('fs'); //access the pre bundled module fs

var myRead = fs.readFileSync('text.txt', 'utf8');
console.log(myRead);

var myWrite = fs.writeFileSync('../../text2.txt', 'Some text', 'utf8');
console.log(myWrite);
