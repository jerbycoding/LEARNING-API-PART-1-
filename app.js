let username = document.getElementById('username');
let password = document.getElementById('userpass');
let submit = document.getElementById('submit');
let load = document.getElementById('load');

submit.addEventListener('click', ()=>{
    username = username.value;
    password = password.value;
})

load.addEventListener('click', ()=>{
    let user = {
        name :username,
        userpass :password
    }
    fetch('https://reqres.in/api/users',{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(user)

    })
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        console.log(data);
        user = {
            name : '',
            userpass: ''
        }
    })
  
})
