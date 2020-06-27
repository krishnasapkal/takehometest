const db = require('../models');

module.exports = async () => {
  try {
    await sequelize.authenticate();
    return true;
  }
  catch(err) {
    return false;
  }
}