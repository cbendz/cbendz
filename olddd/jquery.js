function login(){
    var usrN=document.formOne.userName.value;
    var pswd= document.formOne.pwd.value;
    if (usrN==""){
        prompt("Please enter a username");
        usrN.select();                                                 // Select the textbox
        usrN.focus(); 
      }
    if (pswd==""){      
        prompt("Please enter your password");
        pswd.select();                                                 // Select the textbox
        pswd.focus();
      }
    if((usrN=="user1") && (pswd=="pass1")){
        window.open("http://webpages.uncc.edu/~cbendezu/technologyStocks.html");
        stocks();
    }
    if((usrN=="user2") && (pswd=="pass2")){
        window.open("http://webpages.uncc.edu/~cbendezu/technologyStocks.html");
        stocks();
    }
    if((usrN=="user3") && (pswd=="pass3")){
        window.open("http://webpages.uncc.edu/~cbendezu/technologyStocks.html");
        stocks();
    }
    if{
        prompt("We are unable to recognize your username or password");
        window.open("http://webpages.uncc.edu/~cbendezu/register.html"); 
    }
}

function resetForm{
        document.formOne.userName.value = "";                                             //clear textbox fields
        document.formOne.pwd.value = "";
}