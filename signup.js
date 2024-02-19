var Username = document.querySelector('#Username')
var Email = document.querySelector('#Email')
var Password = document.querySelector('#Password')
var CP = document.querySelector('#Conform-Password')
var form = document.querySelector('form')

function showError(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(input) {
    input.value=input.value.trim()
    if(!input.value){
        showError(input,'Không được để trống')
        return true
    }
    else{
        showSuccess(input)
        return false
    }
}
function checkEmail(input) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let isValid = regexEmail.test(input.value.trim());
    if (isValid) {
        showSuccess(input);
    } else {
        showError(input, 'Email không hợp lệ');
    }
    return isValid;
}
function checkLengthError(input,min,max){
    input.value=input.value.trim()
    if(input.value.length<min){
        showError(input,`Phải có ít nhất ${min} kí tự`)
        return true
    }
    else if(input.value.length>max){
        showError(input,`Không được vượt quá ${max} kí tự`)
        return true
    }
    return false
}
function checkPassAndCP(input1,input2){
    if(input1.value.trim()!==input2.value.trim()){
       showError(input2,'Password không chính xác')
    }
    else
        showSuccess(input2)

}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isUsernameEmptyError = checkEmptyError(Username)
    if(!isUsernameEmptyError){
        let isUsernameLengthError = checkLengthError(Username,10,30)
    }
    let isEmailEmptyError = checkEmptyError(Email)
    if(!isEmailEmptyError){
        let isEmail = checkEmail(Email) 
    }
    let isPasswordEmptyError = checkEmptyError(Password)
    if(!isPasswordEmptyError){
        let isPasswordLengthError = checkLengthError(Password)
    }
    let isCPEmptyError = checkEmptyError(CP)
    if(!isCPEmptyError){
        let checkpacp = checkPassAndCP(Password,CP)
    }


    
})
