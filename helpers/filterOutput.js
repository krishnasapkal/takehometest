const moment = require('moment');

module.exports = (data) => {
  let sortedData = {}
  let suspiciousAccounts = {};

  data.forEach(element => {
    const { TransactionDate, TransactionId, FromAccount, ToAccount } = element;
    const month = moment(new Date(TransactionDate)).format('MMM');
    if (!sortedData[month]) {
      sortedData[month] = [];
    }
    sortedData[month].push(TransactionId);

    if (!suspiciousAccounts[FromAccount.Account + ToAccount.Account] && !suspiciousAccounts[ToAccount.Account + FromAccount.Account]) {
      suspiciousAccounts[FromAccount.Account + ToAccount.Account] = [FromAccount.Account, ToAccount.Account]
    }

  });

  return [sortedData, suspiciousAccounts];
}