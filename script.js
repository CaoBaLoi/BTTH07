// // Câu 01: Đăng kí User ID > 
// // Yêu cầu 01: Required
// // Yêu cầu 02: Độ dài thuộc [5, 12] 
//     // Cách 01: Ko dùng biểu thức chính qui
//     // Cách 02: Có dùng biểu thức chính qui

// // Lưu ý: Kiểu phần tử Submit có hành động mặc định gửi dữ liệu đi

// ### UserID
// let userID = document.getElementById('txtUserID');
// let statusOfUserID = document.getElementById('statusOfUserID')
// let userID = document.querySelector('#txtUserID')

// userID.addEventListener('focus',function(){
//     this.style.border = '1px solid red'
// })
// userID.addEventListener('focusout', leaveUserId)

// function leaveUserId(){
    // Cách 01: Ko dùng gì BTCQ
    // if(userID.value.length >=5 && userID.value.length <=12){
    //     statusOfUserID.textContent = 'UserID hợp lệ'
    //     statusOfUserID.style.color = 'blue'
    // }else{
    //     statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
    //     statusOfUserID.style.color = 'red'
    // }

    // Cách 02: dùng BTCQ: [1, +duongvocung]
//     var userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
//     if(userIDRegex.test(userID.value)){
//         statusOfUserID.textContent = 'UserID hợp lệ'
//         statusOfUserID.style.color = 'green'
//     }else{
//         statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
//         statusOfUserID.style.color = 'red'
//     }
// }
// ### password
// let password = document.getElementById('txtPassword')
// let statusOfPassword = document.getElementById('statusOfPassword')
// password.addEventListener('focus',function(){
//     this.style.border = '1px solid red'
// })
// password.addEventListener('focusout', leavePassword)
// function leavePassword(){
//     var passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
//     if(passwordRegex.test(password.value)){
//         statusOfPassword.textContent = 'Password hợp lệ'
//         statusOfPassword.style.color = 'green'
//     }else{
//         statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 7 - 12'
//         statusOfPassword.style.color = 'red'
//     }
// }

// ### name
// let name = document.getElementById('txtName')
// let statusOfName = document.getElementById('statusOfName')
// name.addEventListener('focus',function(){
//     this.style.border = '1px solid red'
// })
// name.addEventListener('focusout', leaveName)
// function leaveName(){
//     var nameRegex = /^[a-zA-Z]...{5,30}$/;
//     if(nameRegex.test(name.value)){
//         statusOfName.textContent = 'Tên hợp lệ'
//         statusOfName.style.color = 'green'
//     }else{
//         statusOfName.textContent = 'Tên không hợp lệ'
//         statusOfName.style.color = 'red'
//     }
// }
// userID.onchange = function(){
//     alert('Bạn vừa thay đổi UserID và thoát khỏi UserID')
// }

// Cách làm 02: Chỉ xử lý khi nhấp Submit

function checkUserId(){
        // Cách 02: dùng BTCQ: [1, +duongvocung]
    let userID = document.getElementById('txtUserID');
    let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
    if(userIDRegex.test(userID.value)){
        return true
    }
    return false
}

function checkPassword(){
    let password = document.getElementById('txtPassword');
    let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
    if(passwordRegex.test(password.value)){
        return true
    }
    return false
}
// // Tương tự sẽ có 9 hàm check khác

let register = document.getElementById('btnRegister')

register.addEventListener('click', function(e){
    e.preventDefault()
    let statusOfUserID = document.getElementById('statusOfUserID')
    let statusOfPassword = document.getElementById('statusOfPassword')
    if(checkUserId() == true){
        statusOfUserID.textContent = 'UserID hợp lệ'
        statusOfUserID.style.color = 'blue'
    }else{
        statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
        statusOfUserID.style.color = 'red'
    }

    if(checkPassword() == true){
        statusOfPassword.textContent = 'Password hợp lệ'
        statusOfPassword.style.color = 'blue'
    }else{
        statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 7 - 12'
        statusOfPassword.style.color = 'red'
    }
    
})

// Cách 03: Sử dụng thư viện jQuery
// Cú pháp jQuery: $(SELECTOR).ACTION()
// $(document).ready(function(){

//     function checkUserId(){
//         // Cách 02: dùng BTCQ: [1, +duongvocung]
//         let userID = $('#txtUserID').val();
//         let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
//         if(userIDRegex.test(userID)){
//             return true
//         }
//         return false
//     }

//     $("#btnRegister").click(function(e){
//         e.preventDefault();
//         if(checkUserId()){
//             $("#statusOfUserID").text('UserID hợp lệ')
//             $("#statusOfUserID").css('color','blue')
//         }else{
//             $("#statusOfUserID").text('UserID không hợp lệ')
//             $("#statusOfUserID").css('color','red')
//         }
//     })
// })
const submitBtn = document.querySelector('#btnRegister')
const nameInput = document.querySelector('#txtName')
const statusOfName = document.querySelector('#statusOfName')
const selectInput = document.querySelector('#txtSelect')
const statusOfSelect = document.querySelector('#statusOfSelect')
const zidCodeInput = document.querySelector('#txtId')
const statusOfId = document.querySelector('#statusOfId')
const emailInput = document.querySelector('#txtEmail')
const statusOfEmail = document.querySelector("#statusOfEmail")
const gendersInput = document.querySelectorAll('#txtGender')
const statusOfGender = document.querySelector('#statusOfGender')
const checkboxsInput = document.querySelectorAll('#txtCheckbox')
const statusOfCheckbox = document.querySelector('#statusOfCheckbox')


function checkName() {
    const regrex = /^[a-z ,.'-]+$/i
    if(regrex.test(nameInput.value)) {
        statusOfName.innerText = 'Name hợp lệ'
        statusOfName.style.color = 'blue' 
    }else {
        statusOfName.innerText = 'Name không hợp lệ'
        statusOfName.style.color = 'red' 
    }
}

function checkCountry() {
    if(selectInput.value != 'Chọn đất nước') {
        statusOfSelect.innerText = 'Chọn đất nước thành công'
        statusOfSelect.style.color = 'blue' 
    }else {
        statusOfSelect.innerText = 'Vui lòng chọn đất nước'
        statusOfSelect.style.color = 'red' 
    }
}

function checkZipCode() {
    const numericRegrex = /^[0-9]/
    if(numericRegrex.test(zidCodeInput.value)){
        statusOfId.innerText = 'Zid code chính xác'
        statusOfId.style.color = 'blue' 
    } else {
        statusOfId.innerText = 'Zid code không đúng định dạng'
        statusOfId.style.color = 'red'
    }
        
}

function checkEmail() {
    const emailRegrex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(emailRegrex.test(emailInput.value)) {
        statusOfEmail.innerText = 'Email chính xác'
        statusOfEmail.style.color = 'blue'
    } else {
        statusOfEmail.innerText = 'Email không chính xác'
        statusOfEmail.style.color = 'red'
    }
}

function checkGender() {
        if(gendersInput[0].checked === true || gendersInput[1].checked === true) {
            statusOfGender.innerText = 'Đã chọn giới tính thành công'
            statusOfGender.style.color = 'blue'
        } else {
            statusOfGender.innerText = 'Vui lòng chọn giới tính'
            statusOfGender.style.color = 'red'
        }
}

function checkLanguage() {
        if(checkboxsInput[0].checked === true && checkboxsInput[1].checked === true) {
            statusOfCheckbox.innerText = 'Vui lòng chọn 1 ngôn ngữ'
            statusOfCheckbox.style.color = 'red'
        } else if(checkboxsInput[0].checked === true || checkboxsInput[1].checked === true) {
            statusOfCheckbox.innerText = 'Chọn ngôn ngữ thành công'
            statusOfCheckbox.style.color = 'blue' 
        } else {
            statusOfCheckbox.innerText = 'Vui lòng chọn ngôn ngữ'
            statusOfCheckbox.style.color = 'red'
        }
}

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()
    checkName()
    checkCountry()
    checkZipCode()
    checkEmail()
    checkGender()
    checkLanguage()
})