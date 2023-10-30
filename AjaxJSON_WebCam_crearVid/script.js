window.addEventListener("load",inicio);

let contador = 1;
let tiempo;

function inicio(){


    metodo();
    clearInterval(tiempo);
    tiempo = setInterval(metodo, 5000);
    var etiquetaVideo;
    var etiquetaId=document.createElement("span");
    etiquetaId.className="contenedor";
    function metodo(){
            
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //Al hacer parse nos devuelve un objeto
                var objeto = JSON.parse(this.responseText);

                let contenedor = document.getElementById("contenedor");
               
                if (contenedor.children.length>0){
                   contenedor.removeChild(etiquetaVideo);

                }
                etiquetaVideo=document.createElement("video");
                contenedor.appendChild(etiquetaId);
                etiquetaId.textContent=objeto[contador].id;
            
                etiquetaVideo.setAttribute("src",objeto[contador].url);
                etiquetaVideo.setAttribute("autoplay",true);
                
               // contenedor.innerHTML="";
                contenedor.appendChild(etiquetaVideo);
                // contenedor.innerHTML = "ID: " + objeto[contador].id + 
                //     "<br> <video autoplay loop src="+ objeto[contador].url +"></video>";   
                
                console.log("cont " + contador + ". total " + objeto.length);

                if(contador == (objeto.length - 1)){
                    contador = 0;
                }else{
                    contador++;
                }
            
            }
        };

        xhr.open("GET", "getWebcam.php.json", true);
        xhr.send();

    }


}
