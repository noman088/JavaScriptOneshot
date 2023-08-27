const accountId = 144453;
let accountEmail = "noman@google.com";
var accountPassword = "12345";
account_city = "Bhopal";
let accountState; // by default this is undefined

// account_Id = 2
// console.log(accountId);

accountEmail = "hc@hc.com";
accountPassword = "12122121";
account_city = "indore";
console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  account_city,
  accountState,
]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
