const addCustomer = require('./addCustomer');
const addTransaction = require('./addTransaction');
const getResult = require('./getResult');

module.exports = (id) => {
  switch (Number(id)) {
    case 1: {
      addCustomer();
      break;
    }
    case 2 : {
      addTransaction();
      break;
    }
    case 3 : {
      getResult();
      break;
    }
    default : {
      process.exit()
    }
  }
}