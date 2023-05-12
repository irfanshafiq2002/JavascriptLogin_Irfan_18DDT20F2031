function validate()
{
    //
    var password = document.getElementById('password').value;
    var filterUppercase = /(?=.*[A-Z])/;
    var filteraLowercase = /(?=.*[a-z])/;
    var filterNum = /(?=.*[0-9])/;
    var filterSym = /(?=.*[#,_^!@*&])/;
    if(password == "")
    {
        alert('Please Enter a Password');
    }
    else if(!filterUppercase.test(password))
    {
        alert("The password need to include atleast ONE uppercase")
    }
    else if(!filteraLowercase.test(password))
    {
        alert("The password need to include atleast ONE lowercase")
    }
    else if(!filterNum.test(password))
    {
        alert("The password need to include atleast ONE number")
    }
    else if(!filterSym.test(password))
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

function reset()
{
    document.getElementById("box").reset()
}