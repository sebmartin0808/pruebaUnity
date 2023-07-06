/*function ingreso(){

    if (document.form.login.value=='Usuario' && document.form.password.value=='Password'){ 
            document.form.submit(); 
        } 
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
        } 
    } */


    function ingreso() {
        var user_ = document.getElementById('user').value;
        var pass_ = document.getElementById('pass').value;
      
        if(user_ === 'Usuario' && pass_ === 'Password'){
              window.location = 'main.html';
          }else{
              alert('Correo o contraseña incorrecta');
          }
      
        /*if (usuarios.forEach(element => {
            element.email === user_ && element.contraseña === pass_;
          }) === true
        ) {
          window.location = 'index.html';
        } else {
          alert('Correo o contraseña incorrecta');
        }*/
      }
      