var input = require("fs").readFileSync("/dev/stdin", "utf8");

// BEE 1001 | EXTREMAMENTE BÁSICO

var valores = input.split("\n");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());
var X = A + B;

console.log(`X = ${X}`);
