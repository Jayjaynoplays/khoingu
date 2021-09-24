function submitInput(){
    const formField = document.querySelector("#form11");
    const emptyReg = new RegExp ('^$');
    let dto = {
        user: null,
        password: null
    }
    if (formField[0].value.length <= 4 ||formField[1].value.length <= 4){
        alert('Input length must be larger than 4 characters');
        return  dto
    }
    if (emptyReg.test(formField[0].value) ||emptyReg.test(formField[1].value)){
        alert('Input must not empty');
        return  dto
    }
    formField[0].blur()
    formField[1].blur()
    dto = {
        user: formField[0].value,
        password: formField[1].value
    }
    alert('Logged in!!!');
    return dto
}

 function resetInput(){
    document.querySelector("#form11").reset()
}