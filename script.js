/**
 * Regular Expression
 */

var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsbz");

console.clear();
console.log(myArray);

console.warn("Working with Regular Expression");

var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + myRe.lastIndex);


var myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + /d(b+)d/g.lastIndex);

/**
* Example 1
*/

var re = /(\w+)\s(\w+)/;
var str = "John Smith";

var newstr = str.replace(re, "$2, $1");
console.log(newstr);

/**
*
*/

var re = new RegExp("\\w+\\s", "g");
var str = "fee fi fo fum";
var myArray = str.match(re);
console.log(myArray);


/*
*
*/
console.warn("Working with Regular Expression and vetor");
// The name string contains multiple spaces and tabs,
// and may have multiple spaces between first and last names.
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var output = ["---------- Original String\n", names + "\n"];
// Prepare two regular expression patterns and array storage.
// Split the string into array elements.

// pattern: possible white space then semicolon then possible white space
pattern = /\s*;\s*/;


// Break the string into pieces separated by the pattern about and
// store the pieces in an array called nameList
var nameList = names.split(pattern);

// new pattern: one or more characters the spaces the characters.
// Use parentheses to "memorize" portions of the pattern.
// The memorized portions are referred to later.

pattern = /(\w+)\s+(\w+)/;

// New array for holding names being processed.
var bySurnameList = [];

// Display the name array and populate the new array
// with comma-separated names, last first.
//
// The replace method removes anything matching the pattern
// and replaces it with the memorized string—second memorized portion
// followed by comma space followed by first memorized portion.
//
// The variables $1 and $2 refer to the portions
// memorized while matching the pattern.
output.push("---------- After Split by Regular Expression");


var i, len;
for(i = 0, len = nameList.length; i< len; i++){
  output.push(nameList[i]);
  bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
}


//Display the new array.
output.push("---------- Names Reversed");
for(i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

//Sort by last name, the display the sorted array.
bySurnameList.sort();
output.push("---------- Sorted");
for(i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

output.push("---------- End");

console.log(output.join("\n"));


/**
 * Working with array
 */
console.warn("working with array");
 var cores = ['vermelho', 'verde', 'azul', 'preto', 'laranja', 'roxo'];
 for(var i = 0; i < cores.length; i++){
   console.log(cores[i]);
 }
console.warn("working with arry using forEach");

var cores = ['preto', 'roxo', 'vermel', 'branco', 'laranja', 'lilas'];
cores.forEach(function(cor){
  console.log(cor);
});

console.log('\n');
var array = ['primeiro', 'segundo', ,'quarto'];
array.forEach(function(element){
  console.log(element);
});
console.log('\n');

if(array[2] === undefined){
  console.log('array[2] is undefined');
}

array = ['primeiro', 'segundo', undefined, 'quarto'];

array.forEach(function(element){
  console.log(element);
});

console.log('\n');

var firstMyArray = new Array('0','7','8','5', '1', '2', '3');
var firstArray = firstMyArray.concat('a', 'b', 'c');
var fa = firstArray;
console.log(firstArray);
console.log('\n');

var myArray = new Array('Vento', 'Chuva', 'Fogo');
var list = myArray.join(' - ');
console.log(list + '\n');

console.log(firstArray.pop() +'\n');

console.log(firstArray.shift() +'\n');

console.log(firstArray.unshift('4', '9', '6') +'\n');

console.log(firstArray.slice(1, 4) +'\n');

console.log(fa.slice(1, 2, 'a', 'b', 'c', 'd') +'\n');

console.log(fa.sort());
console.log('\n');
var divs = document.getElementsByTagName('div');
for( var i = 0, div; div = divs[i]; i++){
  /* Processa div de alguma forma */
  div.textContent = 'green';
}

/**
* Working with Map
*/

console.warn('Working with map');
var sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size;
sayings.get('fox');
sayings.has('bird');
sayings.delete('dog');
sayings.has('dog');

for(var [key, value] of sayings){
  console.log(key + ' goes ' + value);
}

sayings.clear();
sayings.size;

/**
*Working with WeakMap
*/
/* console.warn('Working with WeakMap');
const privates = new WeakMap();
function Public(){
  const me = {
    name:'Nome', 
    year: '55'
  };
  privates.set(this, me);
}

Public.prototype.method = function(){
  const me = privates.get(this);
  console.log("User's name " + me.name);
  console.log("\nUser\'s year " + me.year);
}
*/
//module.exports = Public;

/**
*Working with Set Object
*/

console.warn("Working with Set");

var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1);
mySet.delete("foo");
mySet.size;

for(let item of mySet)
  console.log(item);

