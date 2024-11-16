document.addEventListener('DOMContentLoaded',function(){
    eventListeners();
});
//Al escuchar el evento ejecuta la funcion (CallBack)
//Registre un listener que escucha por DomContentLoaded, que el documento cargue tanto el html, js y css


function eventListeners(){
    const barraMovil=document.querySelector('.barra-movil');

    barraMovil.addEventListener('click',navegacionResponsive);
}

function navegacionResponsive(){
    console.log('HOLAAAAAAAAA');
    const navegacion=document.querySelector('.menu-movil .navegacion');
    //Basicamente al hacer click si contiene mostrar lo elimina, si no lo contiene, lo agrega 
    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
        
    }else{
        navegacion.classList.add('mostrar');
    }
   //Hace lo mismo pero en una linea jajaja no sabia
   //navegacion.classList.toggle('mostrar');
}
