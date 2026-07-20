/*
================================================

ABC INTERNATIONAL SCHOOL

PREMIUM ONLINE TEST ENGINE v2

Features:

✔ Question Load
✔ Next Question
✔ Answer Checking
✔ Correct Green Tick
✔ Wrong Red Tick
✔ 5 Minute Timer
✔ Auto Submit
✔ Manual Submit
✔ Loading Screen
✔ Premium Result Card
✔ Save Result
✔ One Attempt Lock

================================================
*/


let currentQuestion = 0;

let score = 0;

let selected = false;

let totalTime = 300;

let timer = null;

let submitted = false;



// Student ID

let studentID = 
localStorage.getItem("studentID");




// Test Name

let testName = "Math Test";





// ================= PAGE LOAD =================


window.onload=function(){



if(!studentID){


window.location.href="index.html";


return;

}




if(localStorage.getItem("testDone_"+studentID)){



showAlreadyDone();



}

else{


startTest();


}


};









// ================= ALREADY TEST DONE =================


function showAlreadyDone(){


document.getElementById("questionBox")
.innerHTML=


`

<div class="premiumResult">


<h2>

❌ Test Completed

</h2>


<p>

You have already attempted this test.

</p>


</div>

`;


document.querySelectorAll("button")
.forEach(btn=>{

btn.style.display="none";

});


}











// ================= START TEST =================


function startTest(){


showQuestion();


startTimer();


}









// ================= SHOW QUESTION =================


function showQuestion(){



let question =

tests[testName]
.questions[currentQuestion];



let html =


`

<div class="question">


<h2>

Question ${currentQuestion+1}

/

${tests[testName].questions.length}

</h2>



<p>

${question.question}

</p>



</div>

`;






question.options.forEach((option,index)=>{



html +=


`

<div class="option"

onclick="checkAnswer(this,${index})">


${option}


</div>


`;



});





document.getElementById("questionBox")
.innerHTML=html;



selected=false;


}










// ================= CHECK ANSWER =================


function checkAnswer(element,index){



if(selected)

return;



selected=true;



let question =

tests[testName]
.questions[currentQuestion];



let options =
document.querySelectorAll(".option");





if(index === question.answer){



element.classList.add("correct");


element.innerHTML += " ✅";


score++;


}

else{


element.classList.add("wrong");


element.innerHTML += " ❌";



options[question.answer]
.classList.add("correct");


options[question.answer]
.innerHTML += " ✅";



}



}











// ================= NEXT QUESTION =================


function nextQuestion(){



if(!selected){


alert("Please select answer");


return;


}




currentQuestion++;




if(currentQuestion <

tests[testName].questions.length){


showQuestion();


}

else{


submitTest();


}


}











// ================= TIMER =================


function startTimer(){



timer=setInterval(function(){



let min =
Math.floor(totalTime/60);



let sec =
totalTime%60;





document.getElementById("time")
.innerHTML =


`${min}:${sec<10?"0":""}${sec}`;





totalTime--;





if(totalTime < 0){



submitTest();



}



},1000);



}









// ================= SUBMIT =================



function submitTest(){



if(submitted)

return;



submitted=true;



clearInterval(timer);




document.getElementById("questionBox")
.style.display="none";



document.getElementById("loading")
.style.display="block";



document.getElementById("loading")
.innerHTML=


`

<h2>

Please Wait...

</h2>


<p>

Preparing Your Result

</p>

`;






setTimeout(function(){


showResult();


},3000);



}












// ================= RESULT =================



function showResult(){



let total =

tests[testName]
.questions.length;



let percentage =

Math.round(

(score/total)*100

);






let grade;



if(percentage>=90)

grade="A+";


else if(percentage>=75)

grade="A";


else if(percentage>=60)

grade="B";


else

grade="C";






let student = students[studentID];






let date =

new Date()
.toLocaleDateString();



let time =

new Date()
.toLocaleTimeString();







let resultHTML =



`

<div class="premiumResult">


<h1>

🏫 ABC International School

</h1>


<h3>

Online Test Result Card

</h3>



<hr>



<h2>

👨‍🎓 ${student.name}

</h2>



<p>

Class :

<b>${student.class}</b>

</p>



<p>

Roll Number :

<b>${student.roll}</b>

</p>



<p>

Test Name :

<b>${tests[testName].title}</b>

</p>



<hr>



<h1>

${score}

/

${total}

</h1>



<p>

Percentage :

<b>

${percentage}%

</b>

</p>




<p>

Grade :

<b>

${grade}

</b>

</p>




<p>

Date :

${date}

</p>



<p>

Time :

${time}

</p>



<button onclick="saveResult('${percentage}','${grade}')">


💾 Save Result


</button>


</div>


`;






document.getElementById("loading")
.style.display="none";



document.getElementById("result")
.innerHTML=resultHTML;



document.getElementById("result")
.style.display="block";






// Lock Test


localStorage.setItem(

"testDone_"+studentID,

"yes"

);






}










// ================= SAVE RESULT =================


function saveResult(percent,grade){



let saveData={


student:students[studentID].name,

test:tests[testName].title,

score:score,

percentage:percent,

grade:grade,

date:new Date().toLocaleString()


};





localStorage.setItem(

"Result_"+studentID,

JSON.stringify(saveData)

);



alert(

"✅ Result Saved Successfully"

);



}



/*
================================================

END PREMIUM TEST ENGINE v2

================================================
*/