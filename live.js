/* =====================================
   LIVE SPORTS DASHBOARD JS
===================================== */



// GET DATA FUNCTION

function loadData(id,key){


let element=document.getElementById(id);


let data=localStorage.getItem(key);



if(element && data){


element.innerHTML=data;


}


}







// ================= CLOCK =================



function liveClock(){


let time=new Date();


let h=time.getHours();

let m=time.getMinutes();

let s=time.getSeconds();



if(h<10) h="0"+h;

if(m<10) m="0"+m;

if(s<10) s="0"+s;



let clock = h+":"+m+":"+s;



let box=document.getElementById("updateTime");



if(box){

box.innerHTML=clock;

}


}



setInterval(liveClock,1000);

liveClock();









// ================= CRICKET =================



loadData("cTitle","cTitle");

loadData("cTeamA","cTeamA");

loadData("cTeamB","cTeamB");

loadData("cScoreA","cScoreA");

loadData("cScoreB","cScoreB");

loadData("cOvers","cOvers");

loadData("cStatus","cStatus");









// ================= VOLLEYBALL =================



loadData("vTitle","vTitle");

loadData("vTeamA","vTeamA");

loadData("vTeamB","vTeamB");

loadData("vScore","vScore");

loadData("vPoint","vPoint");









// ================= KABADDI =================



loadData("kTitle","kTitle");

loadData("kTeamA","kTeamA");

loadData("kTeamB","kTeamB");

loadData("kScore","kScore");

loadData("kTime","kTime");

loadData("kStatus","kStatus");









// ================= TOURNAMENT =================



loadData("tTeams","tTeams");

loadData("tMatches","tMatches");

loadData("tLive","tLive");









// ================= NOTICE =================



loadData("notice","notice");









// ================= STATUS COLOR =================



function statusColor(){


let status=document.getElementById("cStatus");



if(status){



if(status.innerHTML=="LIVE"){


status.style.background="#16a34a";


}


else if(status.innerHTML=="COMPLETED"){


status.style.background="#64748b";


}



else{


status.style.background="#f59e0b";


}



}



}



statusColor();









// AUTO CHECK UPDATE


setInterval(()=>{


location.reload();


},10000);