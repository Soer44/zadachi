
const str = 'Ситуация из реальной жизни. Мы пишем приложение для обмена';
const word = 'реальной';

const res = str.replace(RegExp(`\\s*${word}\\s*`), `\n${word}\n`);

console.log(res);




//Ситуация из
//реальной
//жизни. Мы пишем приложение для обмена
