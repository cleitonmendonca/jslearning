/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var idade = 18;
var status = (idade >= 18) ? "adulto" : "menor de idade";

console.log(status);


function valide(obj, minimo, maximo){
  if((obj.valor < minimo) || (obj.valor > maximo))
    alert("valor inválido!");
}

var a = 5;
var b = 10;
console.log(`Quinze é ${a + b} e\nnão ${2 * a + b}.`);
