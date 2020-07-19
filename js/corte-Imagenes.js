

var name_user;
var age_user;





window.onload =function()
{
  
    name_user = getId("name_user");
    age_user = getId("age_user");
    
    
    var url_string = window.location.href; 
    var url = new URL(url_string);
    var c = url.searchParams.get("nombre");
      
    name_user.innerText = c;


    var url_string1 = window.location.href; 
    var url1 = new URL(url_string1);
    var c1 = url1.searchParams.get("edad");

    age_user.innerText = c1 ;



    var foto_completa=getId("micanvas");
    var ctx = foto_completa.getContext("2d");

    var corte1=getId("corte1");
    var ctx1 = corte1.getContext("2d");

    var corte2=getId("corte2");
    var ctx2 = corte2.getContext("2d");

    var corte3=getId("corte3");
    var ctx3 = corte3.getContext("2d");

    var corte4=getId("corte4");
    var ctx4 = corte4.getContext("2d");

    var corte5=getId("corte5");
    var ctx5 = corte5.getContext("2d");

    var corte6=getId("corte6");
    var ctx6 = corte6.getContext("2d");

    var corte7=getId("corte7");
    var ctx7 = corte7.getContext("2d");

    var corte8=getId("corte8");
    var ctx8 = corte8.getContext("2d");

    var corte9=getId("corte9");
    var ctx9 = corte9.getContext("2d");



    var imagen_ganador = getId("Winner");
    

    imagen_ganador.width = 170*3;
    imagen_ganador.height = 170*3;
    //new Image();
    
    var imagen =  getId("imagen_occ") ;  

    var imagen_cargada = getId("exampleFormControlFile1"); 
  
      if (window.FileList && window.File && window.FileReader) 
      {
          
          imagen_cargada.addEventListener('change', (event) => 
        {
          imagen.src = '';

          var file = event.target.files[0];
        
          
          if (!file.type.match('image.*')   ) 
          {
            console.log('Error: El archivo seleccionado no parece ser una imagen.')
            return;
          }
  
    
  
          if (  file.size >= 3000000 ) 
          {
          console.log('Error: La imagen seleccionada no se puede cargar, tiene más de 3mb.')
            return;
          }
          
          
  
          var reader = new FileReader();

          reader.addEventListener('load', event => 
          {

              imagen.src = event.target.result;     
              imagen_ganador.src = event.target.result;
              
      
            
          });
          reader.readAsDataURL(file);
        }); 
        
        
  
      }
    
    imagen.onload = function()
    {
       
        micanvas.setAttribute("width",imagen.naturalWidth);
        micanvas.setAttribute("height",imagen.naturalHeight);

        // colocar laimgaen 
        ctx.drawImage(imagen, 0, 0  );



        var width = micanvas.width;
        var height = micanvas.height;

        var w_corte = parseInt(width/3);
        
        var h_corte = parseInt(height/3);
        
        o = document.getElementsByClassName("o");
        for(var i=0 ; i<9 ; i++ )
        {   
            o[i].setAttribute("width", w_corte);
            o[i].setAttribute("height", h_corte);

        }

        //Imagen Completa
        var w_count = 0;
        var h_count = 0;
        
        var pieza_1 = ctx.getImageData(w_count,h_count, w_corte,h_corte);


        w_count +=  w_corte;
        var pieza_2 = ctx.getImageData(w_count,h_count, w_corte,h_corte);
       
        w_count +=  w_corte;
         var pieza_3 = ctx.getImageData(w_count,h_count, w_corte,h_corte);
        


        
        h_count+= h_corte;
        w_count =0 ;
        var pieza_4= ctx.getImageData(w_count,h_count, w_corte,h_corte);
        
        
        w_count +=  w_corte;
        var pieza_5 = ctx.getImageData(w_count,h_count, w_corte,h_corte);
       
       
        w_count +=  w_corte;
        var pieza_6 = ctx.getImageData(w_count,h_count, w_corte,h_corte);
        



        
        h_count+= h_corte;
        w_count =0 ;
        var pieza_7= ctx.getImageData(w_count,h_count, w_corte,h_corte);
       
       
        w_count +=  w_corte;
        var pieza_8 = ctx.getImageData(w_count,h_count, w_corte,h_corte);
        

        w_count +=  w_corte;
        var pieza_9= ctx.getImageData(w_count,h_count, w_corte,h_corte);


        ctx1.putImageData(pieza_1,0,0)
        ctx2.putImageData(pieza_2,0,0)
        ctx3.putImageData(pieza_3,0,0)
        ctx4.putImageData(pieza_4,0,0)
        ctx5.putImageData(pieza_5,0,0)
        ctx6.putImageData(pieza_6,0,0)
        ctx7.putImageData(pieza_7,0,0)
        ctx8.putImageData(pieza_8,0,0)
        ctx9.putImageData(pieza_9,0,0)
        


       //  console.log(corte.toDataURL())

       var img2 = getId("p-2");
       var img3 = getId("p-3");
       var img9 = getId("p-9");
       var img1 = getId("p-1");
       var img4 = getId("p-4");
       var img5 = getId("p-5");
       var img6 = getId("p-6");
       var img7 = getId("p-7");
       var img8 = getId("p-8");

       img1.src = corte1.toDataURL();
       img2.src = corte2.toDataURL();
       img3.src = corte3.toDataURL();
       img4.src = corte4.toDataURL();
       img5.src = corte5.toDataURL();
       img6.src = corte6.toDataURL();
       img7.src = corte7.toDataURL();
       img8.src = corte8.toDataURL();
       img9.src = corte9.toDataURL();


       iniciar();

    }


  }



  function getId(x)
  {
      return document.getElementById(x);
  }


  