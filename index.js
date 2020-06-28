const db = require('./models')
const startText = require('./helpers/startText');
const operation = require('./controllers/index');
const readline = require('./helpers/readLine').readline;


db.sequelize.sync().then(async () => {
  console.log('Connection has been established successfully.');
  while (1) {
    startText();
    line = await readline();
    await operation(line)
  }
}).catch(err => {
  console.log(err);
  console.log('Database connection failed');
})




