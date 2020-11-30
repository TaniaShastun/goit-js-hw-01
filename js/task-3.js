const writePassword =prompt('Bведите пароль')
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
  
    if (writePassword === null){
       message= ('Отменено пользователем!')
        break;
    }

    if (writePassword===ADMIN_PASSWORD){
        message=('Добро пожаловать!')
        break;
    }
    else{
       message=('Доступ запрещен, неверный пароль!')
       break;
    }
    alert(message)
    
  
      

     
     
 