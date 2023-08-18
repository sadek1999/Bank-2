document.getElementById("btn-withdraw").addEventListener('click',function(){
   console.log('every think is ok ')
    const withdrawAmount=inputFild("withdraw-fild")
    const currentWithdraw=innerText("withdraw-total")
    const currentBalance = innerText("Balance-total")
    if(withdrawAmount>currentBalance){
        alert('Ato toka nai')
        return;
    }
    const withdrawTotal=withdrawAmount+currentWithdraw;
    setInnerText("withdraw-total",withdrawTotal)

    
    const newBalance=currentBalance-withdrawAmount;
    setInnerText("Balance-total",newBalance)
    
})
