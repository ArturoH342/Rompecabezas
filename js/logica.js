
var content_piezas = 
{
    "1":{
        "n_puzzle":7
    },
    "2":{
        "n_puzzle":8
    },
    "3":{
        "n_puzzle":9
    }
    ,"4":{
        "n_puzzle":6
    },
    "5":{
        "n_puzzle":5
    },
    "6":{
        "n_puzzle":4
    },
    "7":{
        "n_puzzle":1
    },
    "8":{
        "n_puzzle":2
    },
    "9":{
        "n_puzzle":3
    }
}

var content_puzzle = 
{
    "1":{
        "n_puzzle":null
    },
    "2":{
        "n_puzzle":null
    },
    "3":{
        "n_puzzle":null
    },
    "4":{
        "n_puzzle":null
    }
    ,"5":{
        "n_puzzle":null
    },
    "6":{
        "n_puzzle":null
    },
    "7":{
        "n_puzzle":null
    },
    "8":{
        "n_puzzle":null
    },
    "9":{
        "n_puzzle":null
    }

}

var isSelect =false;
var first_element ;
var position_element;
var type_element;
var mov_n ; 
var cont = 0 ;
mov_n=document.getElementById("name_mov") ; 


function select(e)
{
    e = e.firstElementChild
   
    var position = e.dataset.position 
    var type=e.dataset.type

 
  if(isSelect)
  {
      
        var data_second= content_piezas[position];
        var data_first ;

            if(type_element == "content_puzzle")
            {



                data_first = content_puzzle[position_element]
               
                content_piezas[position] =data_first;
                content_puzzle[position_element] = data_second;
                var data_ = e.src;
             
                e.src = first_element.src;
                first_element.src = data_;
                cont++;
                mov_n.textContent = cont;

     
            }
     
            else
            {

                data_first = content_piezas[position_element]
                content_piezas[position] = data_first;
                content_piezas[position_element] =data_second;
                var data = first_element.src;
                first_element.src=e.src;
                e.src=data;
                cont++;
                mov_n.textContent = cont;

            }

        first_element.style.border="";
        isSelect =false;
  }

  else
  {
      isSelect =true;
      first_element = e;
      type_element = type;
      position_element=position;
      e.style.border = "3px solid #EE422A";
      
  

  }


}



function select_puzzle(e)
{
    
    e =e.firstElementChild
    var position=e.dataset.position
    var name =e.dataset.type
    // console.log(e.src)
  
    if(isSelect)
    {
        // console.log("Cambiando")

        var data_first ;
        var data_second = content_puzzle[position];
        
        if(type_element == "content_piezas")
        {

            data_first = content_piezas[position_element]
            // console.log(data_first,data_second)
                
            content_piezas[position_element] = data_second;
            content_puzzle[position] =data_first;

            var data = e.src ;
            e.src = first_element.src;
            first_element.src =data
            cont++;
            mov_n.textContent = cont;
        
        }
        
        else
        {   
            data_first = content_puzzle[position_element]
            content_puzzle[position] = data_first;
            content_puzzle[position_element] =data_second;
            var data = first_element.src;
            first_element.src=e.src;
            e.src=data;
            cont++;
            mov_n.textContent = cont;

        }

        isSelect =false;
        first_element.style.border="";
    }

    else 
    {
        isSelect =true;
        first_element = e ;
        e.style.border = "3px solid #EE422A"
        type_element =name;
        position_element=position;
       
    }


}

var ocultar_puzzle = document.getElementById("ocultar_puzzle");

var ganador = document.getElementById("ganador_ima_oculto");

var perdedor = document.getElementById("perpedor_oculto"); 

var perpedor_oculto_2 = document.getElementById("perpedor_oculto_2")

var s = document.getElementById("s")


function verificar()
{
    
    stop();
    var error = false;
    for(var i=1;i<10;i++)
    {
        var data = content_puzzle[ i + "" ];
        if(data.n_puzzle == null)
        {  
            ocultar_puzzle.style.display = "none";
            s.style.display = "none";
            perpedor_oculto_2.style.display = 'block';
            error=true;
            break;
        }
        else if (data.n_puzzle != i)
        {
            
            ocultar_puzzle.style.display = "none";
            s.style.display='none';
            perdedor.style.display = 'block';
            error=true;
            break;

        }
    }
    if(error == false)
    {

        ocultar_puzzle.style.display = "none";
        s.style.display='block';
        ganador.style.display ='block';
        
    }
}



var t,inter ;
var minutero = 1  ; 
function iniciar()
{
    
    t=1;
    var min =  document.getElementById("min");
    var seg = document.getElementById("seg");
    inter = setInterval(function(){
        t++;
        seg.innerHTML = t ; 
        while(t == 60)
        {   
            min.innerHTML = minutero++ ;
            seg.innerHTML = 0 ; 
            t = 0 ;   

        }
    },1000,"JavaScript");
}

function stop()
{
    clearInterval(inter);
}



