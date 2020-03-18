var jsonString = JSON.stringify({
    surname : 'Иванов', // Фамилия
    name : 'Иван', // Имя
    middlename : 'Иванович', // Отчество
    birthday : (new Date()).format('d.m.Y'), // Дата рождения
    sex : 'M' // Пол. M - male, F - female
});
