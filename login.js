const form = document.getElementById('loginForm')
const message = document.getElementById('message')

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();

    message.textContent = ""

    const namePattern = /^[a-zA-Z0-9]+$/

    if(!name || !password) {
        message.textContent = "همه فیلد ها الزامی است "
        return    
    }
     
    if(!namePattern.test(name)){
        message.textContent = " نام وارد شده معتبر نیست "
        return
    }
    
    if(password.length<6){
        message.textContent = "رمز عبور باید حداقل 6 کاراکتر باشد"
        return
    }

    message.textContent = "ورود موفقیت امیز بود !"

})