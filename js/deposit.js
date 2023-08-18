document.getElementById('btn-deposit').addEventListener('click',function(){
    
    const depositAmount=inputFild("deposit-fild");
    const carantDeposit=innerText("deposti-total");
    const depositTotal = depositAmount+carantDeposit;

    setInnerText("deposti-total",depositTotal);

    const blance = innerText("Balance-total")
    const newblance= blance+depositAmount;
    setInnerText("Balance-total",newblance)

   
})