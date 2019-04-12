 ////// ingresa aqui tu llave de firebase


 ///////////////////////////////////////



 /// metodo para cerrar sesion

 let close = document.getElementById('btnclose');
 close.addEventListener("click", function() {

     firebase.auth().signOut();
     window.location.href = "login.html";
     alert("Sesion finalizada");
 });



 //// metodo para insertar datos en firebase

 let Tnombre = document.getElementById('nombre');
 let Tmensaje = document.getElementById('mensaje');
 let Benviar = document.getElementById('btnenviar');
 if (Tnombre === "") {
     alert("No enviar datos vacios, completar cada caja de texto");
 } else {

     Benviar.addEventListener("click", function() {
         let nombre = Tnombre.value;
         let mensaje = Tmensaje.value;


         firebase.database().ref('chat-998a1').push({
             nombre: nombre,
             mensaje: mensaje

         });
     });

     // metodo para cargar datos de firabase a nuestro html

     firebase.database().ref('chat-998a1')
         .on('value', function(snapshot) {
             let cargar = '';
             snapshot.forEach(function(e) {
                 let elemento = e.val();
                 let nombre = elemento.nombre;
                 let mensaje = elemento.mensaje;
                 cargar = "<li><b>" + nombre + ":</b>" + mensaje + "</li>";

             });
             chat_firebase.innerHTML = cargar;
         });

 }