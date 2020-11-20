function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="user")
    {
        alert("Sign in successful");
        return false;
    }

    else
    {
        alert("Sign in failed");
    }
}

Cookies.set("Cookie1", "true", {expires: 3});

var myCookie = Cookies.get('Cookie1');

var title = document.querySelector('h1');

if(myCookie='true'){
    title.classList.add('cookie');
}

if(myCookie =='false'){
    title.classList.remove('cookie');
}
