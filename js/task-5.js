const country =prompt('Введите ваш город доставки');
let price;
let message;

if (country === null) {
    alert("Отменено пользователем!");
  } else if (country === "") {
    alert("Вы ничего не ввели!");
  }
   else{
    let deliveryCountry = country.toLowerCase();

    switch(deliveryCountry){ 
    
        case 'китай': 
        price=100;
        message=(`Доставка в ${deliveryCountry.toLowerCase()} будет стоить ${price} кредитов`);
        break;
    
        case 'чили': 
        price=250;
        message=(`Доставка в ${deliveryCountry.toLowerCase()} будет стоить ${price} кредитов`);
        break;
    
        case 'австралия': 
        price=170;
        message= (`Доставка в ${deliveryCountry.toLowerCase()} будет стоить ${price} кредитов`);
        break;
    
        case 'индия': 
        price=80;
        message= (`Доставка в ${deliveryCountry.toLowerCase()} будет стоить ${price} кредитов`);
        break;
    
        case 'ямайка': 
        price=120;
        message= (`Доставка в ${deliveryCountry.toLowerCase()} будет стоить ${price} кредитов`);
        break;
        
        default:
            message = "В вашей стране доставка не доступна!";
        
    }
     alert(message);
   }

