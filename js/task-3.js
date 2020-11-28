const writePassword =prompt ('Bведите пароль')
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

while(true){
  
    if (writePassword === null){
       alert( message= 'Отменено пользователем!')
        break;
    }

    if (writePassword===ADMIN_PASSWORD){
        alert(message='Добро пожаловать!')
        break;
    }
    else{
        alert(message='Доступ запрещен, неверный пароль!')
        break;

    }
}

     
    
  
      

     
     
 