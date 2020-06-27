const readline = require('readline');
const db = require('./models')

const startText = require('./helpers/startText');
const operation = require('./controllers/index');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


db.sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
  startText();
  rl.on('line', function (line) {
    operation(line);
    startText();
  })
}).catch(err => {
  console.log('Database connection failed');
})




