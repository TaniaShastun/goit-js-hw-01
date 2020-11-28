const total = 100;
const ordered = 50;

if (ordered <= total) {
    console.log(confirm('Заказ оформлен, с вами свяжется менеджер!'));
} else {
    console.log(confirm('На складе недостаточно товаров!'));
}
