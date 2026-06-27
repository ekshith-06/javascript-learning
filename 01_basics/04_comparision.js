
// equality checks like ==  and comparision checks < , > , >=, <= works differently
// comparisions converts null as 0 i.e to a number  where as equality doesnt so the output for >= and <= is true whereas == is false
console.log(null>0);
console.log(null<0);
console.log(null==0);
console.log(null>=0);
console.log(null<=0);



console.log("22"==22);
console.log("22"===22); // strict check , checks both value and datatype

