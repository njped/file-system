const fs = require('fs');
const path = require('path');
​
fs.readdir('./lib', (err, files) => {
  if(err) throw err;
​
	files.forEach(fileName => {
    const file = path.join(__dirname, 'lib', fileName);
    
		fs.stat(file, (err, stats) => {
      if(err) throw err;
​
      if(stats.isFile()) {
        fs.readFile(file, 'utf8', (err, contents) => {
          if(err) throw err;
          console.log(`${fileName}: ${contents}`);
        });
      };
    });
	});
});