// var spawn = require('child_process').spawn,
//     py    = spawn('python3', ['./ankur.py']),
//     data = [1,2,3,4,5,6,7,8,9],
//     dataString = ''
//     newObj = {
//       "state": "ANDAMAN & NICOBAR ISLANDS",
//       "year": 1900
//     };

// py.stdout.on('data', function(data){
//   dataString += data.toString();
// });
// py.stdout.on('end', function(){
//   console.log('Sum of numbers=',dataString);
// });
// py.stdin.write(JSON.stringify(data));
// py.stdin.end();

var spawn = require('child_process').spawn,
    py    = spawn('python3', ['./ankur.py']),
    data = [1,2,3,4,5,6,7,8,9],
    dataString = '',
    newObj = {
      "state": "ANDAMAN & NICOBAR ISLANDS",
      "year": 1900
    };

py.stdout.on('data', function(data){
  dataString += data.toString();
});
py.stdout.on('end', function(){
  console.log('Sum of numbers=',dataString);
});
py.stdin.write(JSON.stringify(newObj));
py.stdin.end();