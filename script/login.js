document.getElementById("login-btn").addEventListener("click", function () {
  const contactNumber = document.getElementById("number-input").value;
  const pinNumber = document.getElementById("password-input").value;
  if(contactNumber=="01234567890" && pinNumber=="1234"){
    alert("Loged in Successfully");
    window.location.assign("/home.html")
  }else{
    alert("Login Failed");
    contactNumber="";
    pinNumber="";
    return;
  }
  
});
