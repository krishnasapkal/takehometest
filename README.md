Take home test - Flag suspicious activity.
###### Small command line tool developed using Node.js. 
###### Sqlite is used for data storage.

## Index
* Install dependencies
* Unit tests
* Start App
* Input format
* Validation rules

## Install Dependencies
```
npm i
```

## Run unit test cases

```
npm test
```


## Start App

```
npm start
```

## Input Format

### Add Customer
Example - 
``` 10010589|Mr. S Kumar|Flat no. 501, Green View Park,Hinjewandi, Pune|9001045238 ```
#### Each field should be seprated by '|' character.
#### All fields are required.

### Add Transaction
Example - 
``` T0175896345|10-Jan-20|10010589|80074567|100000 ```
#### Each field should be seprated by '|' character.
#### All fields are required.

##### Above functionality is added to make testing possible on various combination of data.


## Validation rules

##### 1 - Transaction can be added only if `ToAccount` and `FromAccount` are available in the customers database.
##### 2 - Phone number can only have 10 characters as we are making application in India.
##### 3 - Account number can have only 8 characters.
##### 4 - TrasactionId should have atleast 11 characters as given in the example database.






