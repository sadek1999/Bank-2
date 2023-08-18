function inputFild(id){
    const input = parseFloat(document.getElementById(id).value)
    document.getElementById(id).value=''
    if(isNaN(input)|| input==''){
        alert('Enter your amount in number')
        return
    }
    return input; 
}

function innerText(id){
    const Text =parseFloat(document.getElementById(id).innerText)
    return Text;
}
 
function setInnerText(id,element){
    if(isNaN(element)==false)
    document.getElementById(id).innerText=element;
}