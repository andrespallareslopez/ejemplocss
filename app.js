$(function(){

   $('#btnañadir').click(function(){
      /*
      
      */
      //otra manera de crear elementos tr
      var newtr=$('<tr />',{'class':'dato'});
      newtr.hover(function(){
         //alert('tr hover')
      
      },function(){
      
      });
      
      $('<td />',{'text':'fanta'}).on('mouseover',function(){
         $(this).addClass('celda');
         }).on('mouseleave',function(){
            cajamouselive(this);
         }).on('dblclick',function(){
           var valor=$(this).text();
           var objeto=$('<input />',
            {'id':'txtdescripcion','value':valor,'type':'text','width':$(this).width()-7});
         $(this).wrapInner(objeto);
      }).appendTo(newtr);
      
      $('<td />',{'text':'1'}).on('mouseover',function(){
         $(this).addClass('celda');  
         }).on('mouseleave',function(){
         cajamouselive(this);
         }).on('dblclick',function(){
           var objeto=$('<input />',
            {'id':'txtdescripcion','value':$(this).text(),'type':'number','width':$(this).width()-7});
           $(this).wrapInner(objeto); 
      }).appendTo(newtr);
      
      $('<td />',{'text':'2.5'}).on('mouseover',function(){
         $(this).addClass('celda');  
         }).on('mouseleave',function(){
         cajamouselive(this);
         }).on('dblclick',function(){
           var objeto=$('<input />',
           {'id':'txtdescripcion','value':$(this).text(),'type':'number','width':$(this).width()-7});
           $(this).wrapInner(objeto);
      }).appendTo(newtr);
      
      $('<td />',{'text':'2.5'}).on('mouseover',function(){
           $(this).addClass('celda');  
         }).on('mouseleave',function(){
           $(this).removeClass('celda');
      }).appendTo(newtr);
      
      var newtd=$('<td />').appendTo(newtr);
      
      $('<button />',{'class':'btnborrar','text':'del'}).on('click',function(){   
         $(this).parent().parent().remove();
      }).appendTo(newtd);
      
      var newtd1=$('<td />').appendTo(newtr);
      
      $('<button />',{'class':'btnedit','text':'edit'}).on('click',function(){
         
         var rows=$(this).parent().parent();
         //extraer todo el html del tr y tendremos una cadena de td
         var filasstring=$(rows).html();
         //obtendremos las celdas td en un array, como en este string solo hay elementos td
         var celdas=$(filasstring,'td.dato');
         //cada celda del array es una variable
         var descripcion=$(celdas[0]).text();
         var cantidad=$(celdas[1]).text();
         var precio=$(celdas[2]).text();
         var total=$(celdas[3]).text();   
         
         //alert(descripcion+' '+cantidad+' '+precio);

         }).on('focusin',function(){
         //alert('estoy focusin');
         }).on('focusout',function(){
         //alert('estoy focusout');
         }).on('blur',function(){
         //alert('blur');
      }).appendTo(newtd1);
      //y añadimos el elemento tr antes de la ultima fila
      $('table#ticket tr:last-child').before(newtr);
      
   });  //end btnañadir
   
   cajamouselive=function(self){
       $(self).removeClass('celda');
         var objeto=$(self).children();
         if (objeto.length>0)
         {
            var entrada=$(objeto[0]);
            
            var valor=entrada.val();

            $(self).html(valor);
         }   
   }
   
   //event click borrar   
   $('.btnborrar').click(function(){
      $(this).parent().parent().remove();

   });
   //evento click editar
   $('.btnedit').click(function(){
      var fila=$(this).parent().parent();
      
   });
});