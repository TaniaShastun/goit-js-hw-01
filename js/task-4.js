const credits = 23580;
const pricePerDroid =3000;
const buyerChoise = prompt("Какое количество дроидов вы хотите купить?");
const droidQuantity=Number(buyerChoise);
const totalPrice= droidQuantity*pricePerDroid;
const balance =credits-totalPrice;
let message;
  
  if(buyerChoise===null){
       message='Отменено пользователем!'
   
   }
   else if(totalPrice>credits){
       message='Недостаточно средств на счету!'
   
   }
   else if(totalPrice<=credits){
       message=`Вы купили ${droidQuantity} дроидов, на счету осталось ${balance} кредитов.`
    
   }
   alert(message);