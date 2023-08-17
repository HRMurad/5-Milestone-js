document.getElementById('btn-submit').addEventListener('click', function () {
    // ..............
    let emailField = document.getElementById('user-email');
    let email = emailField.value;
    // ..............
    let passwordField = document.getElementById('user-password');
    let password = passwordField.value;
    // ------------
    if (email === "muradiba1@gmail.com" && password === 'murad') {
        window.location.href = 'accountForm.html';
    } else {
        alert('please enter right info')
    }
});