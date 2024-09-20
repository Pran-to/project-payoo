document.getElementById('btn-add-money').addEventListener('click',(e)=>{
 e.preventDefault();
  const amount = document.getElementById('amount').value ;
   const myAmount = parseFloat(amount);
   const pin = document.getElementById('pin').value 
   if(pin === '1234'){
    const balance = document.getElementById('balance').innerText;
    const myBalance = parseFloat(balance);
     const newBalance = myBalance + myAmount ;

     document.getElementById('balance').innerText = newBalance ;
     document.getElementById('pin').value = '';


   }
   else{
    alert('Sorry Try Again')
   }


})