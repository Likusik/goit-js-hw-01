'use strict';

let credits = 23580;
const pricePerDroid = 3000;

let totalDroid = prompt('Количество дроидов, которое Вы хотите купить: ');
let totalPrice;

if (totalDroid === null) {
    alert('Отменено пользователем!');
}
else {
    totalPrice = pricePerDroid * totalDroid
    if (credits < totalPrice) {
        alert('Недостаточно средств на счету!');
    }
    else {
        alert(`Вы купили ${totalDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
    }
}