const readline = require('readline');

module.exports = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  
  return new Promise((resolve) => {
    rl.on('line', function (line) {
      rl.close()
      resolve(line);
    })
  })

}
