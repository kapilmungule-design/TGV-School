/* =====================================
 SMART TIMETABLE LIVE SYSTEM
===================================== */



function checkPeriod(){


let now=new Date();



let currentTime=

now.getHours()*60+

now.getMinutes();



let periods=document.querySelectorAll(".period");



let found=false;



periods.forEach(row=>{


let start=row.dataset.start.split(":");

let end=row.dataset.end.split(":");



let startTime=

parseInt(start[0])*60+

parseInt(start[1]);



let endTime=

parseInt(end[0])*60+

parseInt(end[1]);




if(
currentTime>=startTime &&
currentTime<=endTime
){



row.classList.add("running");



document.getElementById("currentClass")
.innerHTML=

"🟢 "+row.children[1].innerText+
"<br>👨‍🏫 "+
row.children[2].innerText;



found=true;



}

else{


row.classList.remove("running");


}



});




if(!found){


document.getElementById("currentClass")
.innerHTML=

"🏫 No Active Period";


}



}



setInterval(checkPeriod,1000);


checkPeriod();



/*====================================

SMART TIMETABLE ERP SCRIPT

====================================*/

let selectedClass = "8";



//================ CLOCK =================

function clockUpdate(){

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleTimeString("en-IN");

}

setInterval(clockUpdate,1000);

clockUpdate();




//============= CHANGE CLASS ==============

function showClass(classNo,btn){

selectedClass = classNo;


// Hide All

document.querySelectorAll(".timeTable")
.forEach(table=>{

table.classList.remove("active");

});


// Show Selected

document
.getElementById("class"+classNo)
.classList.add("active");


// Active Button

document.querySelectorAll(".classMenu button")
.forEach(button=>{

button.classList.remove("activeBtn");

});

btn.classList.add("activeBtn");


// Update Live Status

updateCurrentPeriod();

}





//============ TIME TO MINUTES ============

function timeToMinutes(time){

const part=time.split(":");

return Number(part[0])*60+

Number(part[1]);

}





//=========== CURRENT PERIOD =============

function updateCurrentPeriod(){

const table=document.querySelector(

"#class"+selectedClass

);


const periods=table.querySelectorAll(".period");



// Remove Previous Highlight

periods.forEach(row=>{

row.classList.remove("running");

});



const now=new Date();

const currentMinutes=

now.getHours()*60+

now.getMinutes();



let currentText="🏫 School Closed";

let nextText="No Upcoming Period";



for(let i=0;i<periods.length;i++){


const row=periods[i];


const start=

timeToMinutes(

row.dataset.start

);


const end=

timeToMinutes(

row.dataset.end

);



// Current Period

if(currentMinutes>=start

&&

currentMinutes<end){


row.classList.add("running");


const subject=

row.cells[1].innerHTML;


const teacher=

row.cells[2].innerHTML;


const time=

row.cells[0].innerHTML;



currentText=

"📚 "+subject+

"<br>👨‍🏫 "+teacher+

"<br>🕒 "+time;



// Next Period

if(periods[i+1]){


nextText=

"📚 "+

periods[i+1].cells[1].innerHTML+

"<br>🕒 "+

periods[i+1].cells[0].innerHTML;


}

else{


nextText=

"✅ Last Period";


}


break;

}



// Upcoming

if(currentMinutes<start){

nextText=

"📚 "+

row.cells[1].innerHTML+

"<br>🕒 "+

row.cells[0].innerHTML;

break;

}



}



// Before School

if(currentMinutes<480){

currentText="🏫 School Not Started";

}



// After School

if(currentMinutes>930){

currentText="🏁 School Over";

nextText="See You Tomorrow";

}



document.getElementById(

"currentClass"

).innerHTML=currentText;



document.getElementById(

"nextClass"

).innerHTML=nextText;



}



// Refresh Every Minute

updateCurrentPeriod();

setInterval(updateCurrentPeriod,60000);
