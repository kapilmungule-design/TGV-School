/* =====================================
   SPORTS ADMIN CONTROL JS
   PART 1
===================================== */



// SAVE FUNCTION

function saveData(key,value){

    localStorage.setItem(key,value);

}






// ================= CRICKET SAVE =================


function saveCricket(){


    saveData(
        "cTitle",
        document.getElementById("cTitle").value
    );


    saveData(
        "cTeamA",
        document.getElementById("cTeamA").value
    );


    saveData(
        "cTeamB",
        document.getElementById("cTeamB").value
    );


    saveData(
        "cScoreA",
        document.getElementById("cScoreA").value
    );


    saveData(
        "cScoreB",
        document.getElementById("cScoreB").value
    );


    saveData(
        "cOvers",
        document.getElementById("cOvers").value
    );


    saveData(
        "cStatus",
        document.getElementById("cStatus").value
    );



    alert("Cricket Match Updated");


}









// ================= VOLLEYBALL SAVE =================



function saveVolley(){



    saveData(
        "vTitle",
        document.getElementById("vTitle").value
    );



    saveData(
        "vTeamA",
        document.getElementById("vTeamA").value
    );



    saveData(
        "vTeamB",
        document.getElementById("vTeamB").value
    );



    saveData(
        "vScore",
        document.getElementById("vScore").value
    );



    saveData(
        "vPoint",
        document.getElementById("vPoint").value
    );



    alert("Volleyball Updated");


}




/* =====================================
   SPORTS ADMIN CONTROL JS
   PART 2
===================================== */





// ================= KABADDI SAVE =================



function saveKabaddi(){



    saveData(
        "kTitle",
        document.getElementById("kTitle").value
    );



    saveData(
        "kTeamA",
        document.getElementById("kTeamA").value
    );



    saveData(
        "kTeamB",
        document.getElementById("kTeamB").value
    );



    saveData(
        "kScore",
        document.getElementById("kScore").value
    );



    saveData(
        "kTime",
        document.getElementById("kTime").value
    );



    saveData(
        "kStatus",
        document.getElementById("kStatus").value
    );



    alert("Kabaddi Match Updated");


}









// ================= TOURNAMENT SAVE =================



function saveTournament(){



    saveData(
        "tName",
        document.getElementById("tName").value
    );



    saveData(
        "tTeams",
        document.getElementById("tTeams").value
    );



    saveData(
        "tMatches",
        document.getElementById("tMatches").value
    );



    saveData(
        "tLive",
        document.getElementById("tLive").value
    );



    alert("Tournament Updated");


}









// ================= NOTICE SAVE =================



function saveNotice(){



    saveData(

        "notice",

        document.getElementById("notice").value

    );



    alert("Announcement Published");


}









// ================= DELETE ALL DATA =================



function clearAllData(){



    let confirmDelete = confirm(
        "Delete all sports data?"
    );



    if(confirmDelete){


        localStorage.clear();


        alert(
        "All Data Deleted"
        );


        location.reload();


    }


}








// ================= LOAD OLD DATA =================



window.addEventListener("load",()=>{



let ids=[


"cTitle",
"cTeamA",
"cTeamB",
"cScoreA",
"cScoreB",
"cOvers",


"vTitle",
"vTeamA",
"vTeamB",
"vScore",
"vPoint",


"kTitle",
"kTeamA",
"kTeamB",
"kScore",
"kTime",


"tName",
"tTeams",
"tMatches",
"tLive",


"notice"

];





ids.forEach(id=>{


let element=document.getElementById(id);



if(element){


let value=localStorage.getItem(id);



if(value){

element.value=value;


}



}



});



});


function logout(){


localStorage.removeItem("adminLogin");


window.location.href="admin-login.html";


}