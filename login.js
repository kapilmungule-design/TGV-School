function login(){


let pass =
document.getElementById("password").value;



let adminPassword = "Admin@123";



if(pass === adminPassword){


localStorage.setItem(
"adminLogin",
"true"
);



window.location.href="admin.html";


}

else{


document.getElementById("error")
.innerHTML="Wrong Password";


}


}