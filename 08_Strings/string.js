const name = 'chetan'
const repoCount = 50

console.log(name +repoCount+ ' value'); // Now a days we are not using this

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`); //good practice

// other ways to make string
const gameName = new String ('chetangame')
console.log(gameName);

console.log(gameName.length);
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf("t"));
console.log(gameName.startsWith('che'))

const newString = gameName.substring(0,4)
console.log(newString);

const newString1 = gameName.slice(0,5)
console.log(newString1);

const newString3 = '  chetan   '
console.log(newString3.trim());

const url = 'https://chetan.com/chetan%20new'
console.log(url.replace("%20", '-'));

console.log(url.includes('chetan'));

const stringNew = 'chetan javascript web'
const splitted = stringNew.split(" ")
console.log(splitted);

const joined = splitted.join("-")
console.log(joined);