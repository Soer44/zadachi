

function filter_list(l) {
  // Return a new array with the strings filtered out
return l.filter( str => typeof str != 'string');
}

// Я написал своё решение, которое соответствовало запросам задачи. 
// В этом ката вы создадите функцию, 
// которая берет список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.

// решение через переменную
const result = l.filter(item => typeof item == 'number' && item >= 0);
console.log(result);


// Правильное решение через функцию.

return l.filter( str => typeof str != 'string' && str >= 0)
