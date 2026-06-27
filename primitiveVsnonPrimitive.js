let a="Raj"
let b=a;
console.log(a);
console.log(b);
a="John"
console.log(a);
console.log(b); // b wont change as a result of change in a as they are primitive data types so address of them is not unique

// b doesn't change because strings are primitive values.
// Assigning b = a copies the value. Reassigning a later does not affect b.



// Primitive values are copied by value, not by reference.
// So changing a later doesn't change b.


let user1={
    name:"Raj"
}

let user2=user1
console.log(user1.name);
console.log(user2.name);

user2.name="John"
console.log(user1.name);
console.log(user2.name);



// Objects are assigned by reference.
// user1 and user2 refer to the same object,
// so changing the object through one variable
// is visible through the other.