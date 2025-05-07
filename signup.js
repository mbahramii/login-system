const form = document.getElementById('loginForm')
const nameMessage = document.getElementById('nameMessage')
const phoneMessage = document.getElementById('phoneMessage')
const emailMessage = document.getElementById('emailMessage')
const passwordMessage = document.getElementById('passwordMessage')
const passwordConfirmMessage = document.getElementById('passwordConfirmMessage')
const succesmessage = document.getElementById('succesmessage')

form.addEventListener("submit",function(e) {
    e.preventDefault()

    const name = document.getElementById('username').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    succesmessage.textContent = ""
    nameMessage.textContent = ""
    phoneMessage.textContent = ""
    emailMessage.textContent = ""
    passwordMessage.textContent = ""
    confirmPassword.textContent = ""


    const namePattern = /^[a-zA-Z0-9]+$/
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if(!name)  {
        nameMessage.textContent = "همه فیلد ها الزامی است "
    return    
    }
    if(!phone)  {
        phoneMessage.textContent = "همه فیلد ها الزامی است "
    return    
    }
    if(!email)  {
        emailMessage.textContent = "همه فیلد ها الزامی است "    
    return    
    }
    if(!password)  {
        passwordMessage.textContent = "همه فیلد ها الزامی است "
    return    
    }
    if(!confirmPassword)  {
        confirmPassword.textContent = "همه فیلد ها الزامی است "
    return    
    }

    if(!namePattern.test(name)){
        nameMessage.textContent = " نام وارد شده معتبر نیست "
    return
    }

    if(!emailPattern.test(email)){
        emailMessage.textContent = " ایمیل وارد شده معتبر نیست "
    return
    }

    if(password.length<6){
        passwordMessage.textContent = "رمز عبور باید حداقل 6 کاراکتر باشد"
    return
    }

    if(password !== confirmPassword ){
        passwordConfirmMessage.textContent = "رمز عبور را دقیق تکرار کنید"
    return
    }

    
    succesmessage.textContent = "ثبت نام موفقیت امیز بود !! "

    console.log("ثبت نام موفقیت امیز بود !!")

})