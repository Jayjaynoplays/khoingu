function indexesTransferring(){
    const inputNumber = parseInt(document.querySelector('#numberInput').value)
    if(inputNumber <=0 || inputNumber >=4){
        alert('Invalid number');
        return;
    }
    document.querySelector('#selectBox').value = inputNumber
}

