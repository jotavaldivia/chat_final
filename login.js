 ////// ingresa aqui tu llave de firebase


 ///////////////////////////////////////





 // ingresar al sistema

 function Ingresar() {
     let correo = $('#email').val();
     let pass = $('#password').val();
     if (pass == "" && correo == "") {
         alert('correo o contraseña vacios')
     } else {
         firebase.auth().signInWithEmailAndPassword(correo, pass)

         .catch(function(error) {

             var errorCode = error.code;
             var errorMessage = error.message;
             // ...
             alert(errorMessage);


         });


     };

 };




 //verifica si existe algun usuario activo

 function verificar_sesion() {


     firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
             alert('sesion iniciada');
             window.location.href = "chat.html";


             var displayName = user.displayName;
             var email = user.email;
             var emailVerified = user.emailVerified;
             var photoURL = user.photoURL;
             var isAnonymous = user.isAnonymous;
             var uid = user.uid;
             var providerData = user.providerData;
             // ...
         } else {


         }
     });

 };


 verificar_sesion();


 // registrar usuario en el sistema

 function Registrar() {
     let correo = $('#email').val();
     let pass = $('#password').val();
     if (pass == "" && correo == "") {
         alert('correo o contraseña vacios')
     } else {
         firebase.auth().createUserWithEmailAndPassword(correo, pass).catch(function(error) {

             var errorCode = error.code;
             var errorMessage = error.message;

             alert(errorCode);
         });
     }
 };