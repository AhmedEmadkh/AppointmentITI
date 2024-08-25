﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Forget Password
document.getElementById('forgotBtn').addEventListener('click', function () {
    var email = document.getElementById('emailForgot').value;

    // Add your validation and AJAX logic here to send the email.

    if (email) {
        document.getElementById('emailSent').classList.remove('d-none');
        document.getElementById('error').classList.add('d-none');
    } else {
        document.getElementById('error').classList.remove('d-none');
        document.getElementById('emailSent').classList.add('d-none');
    }
});

//Reset Password
document.getElementById('resetBtn').addEventListener('click', function () {
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Add your validation and AJAX logic here to reset the password.

    if (newPassword === confirmPassword) {
        document.getElementById('passwordReset').classList.remove('d-none');
        document.getElementById('passwordMismatch').classList.add('d-none');
    } else {
        document.getElementById('passwordMismatch').classList.remove('d-none');
        document.getElementById('passwordReset').classList.add('d-none');
    }
});

