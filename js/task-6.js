let input;
let total = 0;


do{
input=prompt('Введите число');
input = Number(input);


if (Number.isNaN (input)) {
alert('Было введено не число, попробуйте еще раз');
continue;
}

else {
total += input;
}

} while (input !== null);

console.log(`Общая сумма чисел равна ${total}`);