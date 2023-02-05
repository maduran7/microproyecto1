function carrusel() {
  
    imagenes= ["images/carrusel4.png","images/carrusel2.png","images/carrusel3.png"];
        i=0;
    window.setInterval(function(){
        document.getElementById("showcase").style.backgroundImage="url('"+imagenes[i]+"')";
        i++;
        if(i>2) i=0;
    },8000);
}


document.getElementById("formulario").onsubmit = function(){
    


    var x = document.getElementById("name").value;
    var valido = true;
    var mensaje = "";
    if (x == "") {
      mensaje+="\nEl campo nombre está vacio"
      valido = false;
    }else{
        if(!/^[A-Za-z]+$/.test(x)){
            mensaje += "\nEl campo nombre es inválido";
            valido = false;
        }
    }
    x = document.getElementById("msg").value;
    if (x == "") {
        mensaje+="\nEl campo mensaje está vacio"
        valido = false;
    }
    x = document.getElementById("mail").value;
    if (x == "") {
        mensaje+="\nEl campo email está vacio"
        valido = false;
    }else{
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(x)){
            mensaje += "\nEl campo email es inválido";
            valido = false;
        }
    }
    if(!valido){
        alert(mensaje);
    }else{ 
        
        var a = document.getElementById("name").value;
        var b = document.getElementById("msg").value;
        var c = document.getElementById("mail").value;
        console.log("nombre:"+a);
        console.log("mail:"+c);
        console.log("msg:"+b);
        alert("su mensaje ha sido enviado")
    }
    return valido;
}
