// const name1 = "kavin";
// const name2 = "kavinesh"
// const password1 = "Kavin@123"
// const password2 = "Kavin@0909"

// let user = document.getElementById('username');

// let password = document.getElementById('password');

// const submit = document.getElementById('submit');

// submit.addEventListener('click',function validate(e)
// {
//     if(name1 === user.value && password1 === password.value)
//     {
        
//         document.location.href = "weather.html";
//         console.log('sucess');
//     }

//     else if (name2 === user.value && password2 === password.value) {
    
//         document.location.href = "weather.html";
//     }

//     else{
//         console.log('pls enter crt username and password');
//     }
//     e.preventDefault();

// });


let user = document.getElementById('username');

 let password = document.getElementById('password');

 let error = document.getElementById('error');


 submit.addEventListener('click',function validate(e)
 {


    if (user.value === "" || password.value === "")
    {
        error.innerHTML="Please Enter the data";
    }

    
   else  if(password.value === "password" || password.value === "PASSWORD")
    {
        error.innerHTML="Password not be Password";
    }

   else if(password.value.length<8 || user.value.length<3)
    {
        console.log(user.value , password.value);
        error.innerHTML="username have atlast 3 character and password must be greater than 8 character";
    } 

    

    else 
    {
        document.location.href = "weather.html";
    }
    e.preventDefault();
 });