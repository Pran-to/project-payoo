document.getElementById('btn-cash-out').addEventListener('click',(e)=>{
    e.preventDefault();
     const amount = document.getElementById('cash-out-amount').value ;
      const myAmount = parseFloat(amount);
      const pin = document.getElementById('pinNumber').value 
      if(pin === '1234'){
       const balance = document.getElementById('balance').innerText;
       const myBalance = parseFloat(balance);
        const newBalance = myBalance - myAmount ;
   
        document.getElementById('balance').innerText = newBalance ;
        document.getElementById('pinNumber').value = '';
   
   
      }
      else{
       alert('Sorry Try Again')
      }
   
   
   })