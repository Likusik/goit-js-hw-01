'use strict';

const adminPassword = 'jqueryismyjam';
let message;
const inputPassword = prompt('Введите пароль.') 

if (inputPassword === null) {
    message = 'Отменено пользователем!';
} else if (adminPassword === inputPassword) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert (message);