/*
================================================

ABC INTERNATIONAL SCHOOL

HOME PAGE JAVASCRIPT

Features:

✔ Student Login
✔ Auto Image Slider
✔ Animation Effects
✔ Portal Redirect

================================================
*/





// ================= STUDENT LOGIN =================


function login(){



let code =

document
.getElementById("studentCode")
.value
.trim()
.toUpperCase();




let error =

document.getElementById("error");






if(code===""){


error.innerHTML=

"⚠ Please Enter Student ID";


return;


}







if(typeof students !== "undefined"
&& students[code]){





// Save Student ID


localStorage.setItem(

"studentID",

code

);





// Success Animation


error.style.color="green";


error.innerHTML=

"✅ Login Successful... Opening Portal";






setTimeout(()=>{


window.location.href="student.html";



},1500);





}

else{



error.style.color="red";


error.innerHTML=

"❌ Invalid Student ID";


}




}











// ================= IMAGE AUTO SLIDER =================



let slidePosition=0;



function autoSlider(){



let slider =

document.querySelector(".slider");



if(!slider)

return;





slidePosition += 320;



if(
slidePosition >= slider.scrollWidth-slider.clientWidth
){


slidePosition=0;


}




slider.scrollTo({


left:slidePosition,


behavior:"smooth"


});




}







setInterval(

autoSlider,

2500

);











// ================= NOTICE ANIMATION =================



let notice =

document.querySelector(".notice");



if(notice){



notice.style.transition="0.5s";



setInterval(()=>{


notice.style.opacity="0.7";



setTimeout(()=>{


notice.style.opacity="1";


},500);



},3000);



}










// ================= PAGE LOAD EFFECT =================



window.addEventListener(

"load",

()=>{



document.body.style.opacity="0";



setTimeout(()=>{


document.body.style.transition="1s";


document.body.style.opacity="1";



},100);



}

);








/*
================================================

END HOME SCRIPT


Website Flow:

Home

 ↓

Student Login

 ↓

Student Portal


================================================
*/





let notice=document.getElementById("noticeText");

let pause=document.getElementById("pauseNotice");

let play=document.getElementById("playNotice");



pause.onclick=function(){

notice.style.animationPlayState="paused";

}



play.onclick=function(){

notice.style.animationPlayState="running";

}

