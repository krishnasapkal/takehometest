const addCustomer = require('./addCustomer');
const addTransaction = require('./addTransaction');
const getResult = require('./getResult');

module.exports = async (id) => {
  switch (Number(id)) {
    case 1: {
    await addCustomer();
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