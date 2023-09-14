// Stack (primitive) and Heap( Non-Primitive)

let myYoutube = 'chetan.com'
let anotherName = myYoutube
anotherName = 'chai'
console.log(anotherName);
console.log(myYoutube);

// --------------heap--------------

let userone = {
    email : "user@gmail.com",
    upi : 'user@ybl'
}

let userTwo = userone

userTwo.email= 'het@.com'

console.log(userone);
console.log(userTwo);