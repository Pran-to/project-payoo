document.getElementById('btn-login').addEventListener('click',(e)=>{

    e.preventDefault();

   const phoneNumber = document.getElementById('phone-number').value ;
   const pinNumber =  document.getElementById('pin-number').value ;

   if(phoneNumber === '3' && pinNumber === '1234'){
     
    window.location.href = 'home.html';
   }
   else{
    alert('wrong number or Pin')
   }

    console.log(phoneNumber ,pinNumber)

})