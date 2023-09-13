
let score = "33"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);
//-------------------------------------------------------------------------
let score2 = '33ac'

let valueInNumber2 = Number(score2)
console.log(valueInNumber2, typeof valueInNumber2);
//--------------------------------------------------------------------------
let score3 = null

let valueInNumber3 = Number(score3)
console.log(valueInNumber3 , typeof valueInNumber3)
//-----------------------------------------------------------------------------
let score4 = undefined

let valueInNumber4 = Number(score4)
console.log(valueInNumber4 , typeof valueInNumber4)

//---------------------------------------------------------------------------
let score5 = true

let valueInNumber5 = Number(score5)
console.log(valueInNumber5 , typeof valueInNumber5)
//----------------------------------------------------------------------------
// '33' => 33
// '33abc' => NaN
// true =>1; false => 0

//-----------------------------------------------------------------------------
let islogged1 = true

let valueInNumber6 = Boolean(islogged1)

console.log(valueInNumber6, typeof valueInNumber6);
//-------------------------------------------------------------------------------
let islogged2 = ''

let valueInNumber7 = Boolean(islogged2)

console.log(valueInNumber7, typeof valueInNumber7);

//--------------------------------------------------------------------------------

let islogged3 = 'chetan'

let valueInNumber8 = Boolean(islogged3)
console.log(valueInNumber8, typeof valueInNumber8);
//----------------------------------------------------------------------------------

// 1 => true; 0 => false
// '' => false
// 'chetan' => true

//----------------------------------------------------------------------------------

let someNumber = 33
let valueInNumber9 = String(someNumber)
console.log(valueInNumber9, typeof valueInNumber9);