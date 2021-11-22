$(document).ready(function(){
   wassub() ;


}) 
function wassub(){
   if(localStorage.getItem('SUBCRIBER') == 1){
     $('.sub').html('Đã đăng ký');
     $('#wassub').attr('hidden',false);
     $('#xla').html('<a href="xla.html">Tham khảo bảng otsu matran 16*16 </a>');
   }else{ $('#wassub').attr('hidden',true);
     $('#xla').html('');
        }
 }

$('.sub').click(function(){
  
 if(localStorage.getItem('SUBCRIBER') == 1){
   localStorage.setItem('SUBCRIBER',0);
     $('.sub').html('Đăng ký');
     $('#wassub').attr('hidden',true);
       $('#xla').html('');
   }
   else {localStorage.setItem('SUBCRIBER',1);
          $('.sub').html('Đã đăng ký');
          alert('Cảm ơn bạn đã đăng ký website :)');
          $('#wassub').attr('hidden',false);
          $('#xla').html('<a href="xla.html">Tham khảo bảng otsu matran 16*16 </a>');
         }
})

   	
   