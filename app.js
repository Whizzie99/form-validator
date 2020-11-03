const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    // username
    if(username.value === ''){
        showError(username, 'Username is required');
    } else{
        showSuccess(username);
    }

    // email
    if(email.value === ''){
        showError(email, 'Email is required');
    } else{
        showSuccess(email);
    }

    // password
    if(password.value === ''){
        showError(password, 'Username is required');
    } else{
        showSuccess(password);
    }

    // confirm password
    if(password2.value === ''){
        showError(password2, 'Username is required');
    } else{
        showSuccess(password2);
    }
});
