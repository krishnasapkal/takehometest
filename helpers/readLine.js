const readline = require('readline');

module.exports = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  rl.on('line', function (line) {
    return line;
  })
}
