window.addEventListener("load",inicio);

let contador = 0;
let tiempo;

function inicio(){


    metodo();
    clearInterval(tiempo);
    tiempo = setInterval(metodo, 5000);


    function metodo(){
            
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //Al hacer parse nos devuelve un objeto
                var objeto = JSON.parse(this.responseText);

                let contenedor = document.getElementById("contenedor");

                contenedor.innerHTML = "ID: " + objeto[contador].id + 
                    "<br> <video autoplay loop src="+ objeto[contador].url +"></video>";   
                
                console.log("cont " + contador + ". total " + objeto.length);

                if(contador == (objeto.length - 1)){
                    contador = 0;
                }else{
                    contador++;
                }
            
            }
        };

        xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
        xhr.send();

    }


}
