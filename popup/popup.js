
document.addEventListener('DOMContentLoaded', () => {
    var submit = document.getElementById('save-button');
    var form = document.getElementById('form');

    form.addEventListener('submit', () => {
        var login = document.getElementById('login-field').value;
        var password = document.getElementById('password-field').value;

        login = login.trim();
        password = password.trim();

        if (!login || login == "" || !password || password == "")
            return alert("Pola nie mogą być puste");

        browser.storage.local.set({ uo_credentials: { login: login, password: password } });
    })
    submit.addEventListener('click', () => form.submit())
})