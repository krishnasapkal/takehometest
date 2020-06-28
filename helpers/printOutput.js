//dependencies
const chalk = require('chalk');

module.exports = (sortedData, suspiciousAccounts) => {
  Object.keys(sortedData).forEach(key => {
    console.log(chalk.greenBright(`For The Month of ${key}`))
    console.log(chalk.greenBright(`Suspicious Transactions : `))
    sortedData[key].forEach(t => console.log(chalk.green(t)))
    console.log('\n')
  })

  if (!Object.keys(suspiciousAccounts).length) {
    console.log(chalk.greenBright(`No Suspicious Accounts found`))
  }
  else {
    console.log(chalk.greenBright(`Suspicious Accounts`))
    Object.keys(suspiciousAccounts).forEach(key => {
      console.log(chalk.green(suspiciousAccounts[key]))
    })
  }

}