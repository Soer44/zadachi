

   function main() {
    var depth = parseInt(readLine(), 10);
    //ваш код (например, вставим функцию climb() в main() )
function climb(height) {
    let days = 0;
    if (height <= 0) return days;
    for (let i = 0; ; i -= 2) { // i -= 2 спускается ночью после итерации
        i += 7; // Если высота не достигнута, то подняться днём
        ++days; // Увеличить на 1 счетчик потраченных дней
        if (i >= height) break;
        // Следующим шагом будет i -= 2
    }
    return days;
}
 
    console.log(climb(depth));
}
