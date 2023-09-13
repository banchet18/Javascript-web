//Variables

const accountId = 144456
let  accountEmail = 'chetan@gmail.com' 
var  accountPassword = '123245'
acountCity = 'mumbai'


//accountId cant be modified because of const
accountEmail = 'dev@gmail.com'
accountPassword ='51561'
acountCity = 'delhi'


console.log(accountId);

console.table([accountId, accountEmail, accountPassword,acountCity]);
/**
 * Prefer not to use var
 * beacause of issue in block scope and function scope 
 */