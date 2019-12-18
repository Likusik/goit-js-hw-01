'use strict';


let input;
let total = 0;

do {

  input = prompt("Введите число!");
  let result = Number(input);
  if(Number.isNaN(result)){
    alert("Было введено не число, попробуйте еще раз!");
  }
  else{
    total += result;
  }
 
} while (input !== null);
alert(`Общая сумма чисел ${total}`);