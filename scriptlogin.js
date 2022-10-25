function validate()
{
    var password = document.getElementById('password').value;
    var filterA = /(?=.*[A-Z])/;
    var filtera = /(?=.*[a-z])/;
    var filterNum = /(?=.*[0-9])/;
    var filterSym = /(?=.*\d)/;
    if(password == "")
    {
        alert('Please Enter a Password');
    }
    else if(!filterA.test(password))
    {
        alert("The password need to include atleast ONE uppercase")
    }
    else if(!filtera.test(password))
    {
        alert("The password need to include atleast ONE lowercase")
    }
    else if(!filterNum.text(password))
    {
        alert("The password need to include atleast ONE number")
    }
    else if(!filterSym.text(password))
    {
        alert("The password need to include atleast ONE symbol")
    }
    else if(password.length < 12)
    {
        alert("Sorry, your password is less than 12 characters")
    }
    else
    {
        alert('Successful Login');
    }
}