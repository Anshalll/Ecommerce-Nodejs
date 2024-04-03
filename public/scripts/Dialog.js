const Body = document.querySelector('body');
const Login_btns = document.querySelectorAll('.loginbtn');
const login_dialog = document.querySelector('.login-dialog');
const close_dialog = document.querySelector('#close-dialog');

Login_btns.forEach(function(Login_btn) {
    Login_btn.addEventListener('click', function() {
        Body.style.overflowY = 'hidden';
        login_dialog.style.display = 'flex';
    });
});

close_dialog.addEventListener('click', function() {
    Body.style.overflowY = 'auto';
    login_dialog.style.display = 'none';
});
