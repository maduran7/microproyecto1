function carrusel() {
    imagenes= ["images/carrusel4.png","images/carrusel2.png","images/carrusel3.png"];
    i=0;
    window.setInterval(function(){
        document.getElementById("showcase").style.backgroundImage="url('"+imagenes[i]+"')";
        i++;
        if(i>2) i=0;
    },8000);
}