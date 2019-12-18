'use strict';
/*

const deliveryToChina = 100;
const deliveryToChile = 250;
const deliveryToAustralia = 170;
const deliveryToIndia = 80;
const deliveryToJamaica = 120;
let input;


input = prompt('Укажите страну, для осуществления доставки: ');

if (input === null || input === '') {

} else {

    switch (input.toLowerCase()) {
        case 'китай' :
            console.log(`Доставка в Китай будет стоить ${deliveryToChina}`);
            break;
        case 'чили' :
            console.log(`Доставка в Чили будет стоить ${deliveryToChile}`);
            break;
        case 'австралия' :
            console.log(`Доставка в Австралию будет стоить ${deliveryToAustralia}`);
            break;
        case 'индия' :
            console.log(`Доставка в Индию будет стоить ${deliveryToIndia}`);
            break;
        case 'ямайка' :
            console.log(`Доставка на Ямайку будет стоить ${deliveryToJamaica}`);
            break;
        default:
            console.log('В данной стране доставка не доступна(');
    }
}
*/

const deliveryToChina = 100;
const deliveryToChile = 250;
const deliveryToAustralia = 170;
const deliveryToIndia = 80;
const deliveryToJamaica = 120;

const delivery = prompt("Укажите страну, для осуществления доставки: ");

if (delivery === null) {
  alert("Отменено пользователем!");
} else {
  switch (delivery.toLowerCase()) {
    case "китай":
      alert(`Доставка в Китай будет стоить ${deliveryToChina} кредитов`);
      break;

    case "чили":
      alert(`Доставка в Чили будет стоить ${deliveryToChile} кредитов`);
      break;

    case "австралия":
      alert(`Доставка в Австралию будет стоить ${deliveryToAustralia} кредитов`);
      break;

    case "индия":
      alert(`Доставка в Индию будет стоить ${deliveryToIndia} кредитов`);
      break;

    case "ямайка":
      alert(`Доставка на Ямайку будет стоить ${deliveryToJamaica} кредитов`);
      break;

    default:
      alert("В данной стране доставка не доступна(");
  }
}
