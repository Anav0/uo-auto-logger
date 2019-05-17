var inputs = document.getElementsByTagName("input");

var login = inputs[2];
var password = inputs[3];
var checkbox = inputs[4];

browser.storage.local.get('uo_credentials').then((credentials, err) => {
    let { uo_credentials } = credentials;

    if (uo_credentials == null || !uo_credentials)
        return;

    if (err)
        return console.log(err);

    login.value = uo_credentials.login;
    password.value = uo_credentials.password;
    checkbox.value = true;
    document.getElementsByTagName("form")[0].submit();
})

