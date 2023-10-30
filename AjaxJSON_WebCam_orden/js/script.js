window.addEventListener("load",inicio);
var posicion=-1;
function inicio(){
        
           
           let btnMostrar= document.getElementById("mostrar");
           btnMostrar.addEventListener("click", mostrar);
           
        }

        function mostrar() {
            var xhr = new XMLHttpRequest();
            posicion++;
            xhr.onreadystatechange = cargar;
            function cargar() {
                if (this.readyState == 4 && this.status == 200) {
                    //Al hacer parse nos devuelve un objeto
                    var objeto = JSON.parse(this.responseText);

                   let longitud=objeto.length;                   
                   objeto.forEach(recorrer);
                   function recorrer(item,index){
                    if (posicion===index){
                        console.log("posicion;"+posicion);
                        console.log("index: "+index);
                    document.getElementById("parrafo").innerHTML = "<video src='"+item.url +"' width='900' height='700' autoplay loop></video>";
                    document.getElementById("parrafo").className="gallery";
                 
                    document.getElementById("identificador").innerHTML=item.id;
                    if (longitud-1==posicion){posicion=-1;}
                    }
                   }
                
            }
             }
            xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
            xhr.send();
       
        }
