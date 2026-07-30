/*
====================================

TUKADOJI GRAMIN VIDYALAYA
SIMPLE ONLINE TEST ENGINE

====================================
*/


let currentQuestion = 0;

let score = 0;

let selected = false;

let time = 300;

let timer;



let testName = "Math Test";




// PAGE LOAD

window.onload = function(){

startTest();

};





// START TEST

function startTest(){

showQuestion();

startTimer();

}







// SHOW QUESTION


function showQuestion(){


let q = tests[testName].questions[currentQuestion];


let html = `


<h2>
Question ${currentQuestion+1}
/
${tests[testName].questions.length}
</h2>


<h3>
${q.question}
</h3>


`;


q.options.forEach((option,index)=>{


html += `

<div class="option"
onclick="checkAnswer(this,${index})">

${option}

</div>

`;

});


document.getElementById("questionBox").innerHTML=html;


selected=false;


}







// CHECK ANSWER


function checkAnswer(box,index){


if(selected)

return;


selected=true;


let q =
tests[testName].questions[currentQuestion];


if(index==q.answer){


box.classList.add("correct");

box.innerHTML+=" ✅";


score++;


}

else{


box.classList.add("wrong");

box.innerHTML+=" ❌";


}



}







// NEXT QUESTION


function nextQuestion(){


if(!selected){

alert("Select Answer First");

return;

}



currentQuestion++;



if(currentQuestion < tests[testName].questions.length){


showQuestion();


}

else{


submitTest();


}


}







// TIMER


function startTimer(){


timer=setInterval(()=>{


let min=Math.floor(time/60);

let sec=time%60;



document.getElementById("time").innerHTML=

`${min}:${sec<10?"0":""}${sec}`;



time--;



if(time<0){


submitTest();


}


},1000);


}







// SUBMIT


function submitTest(){


clearInterval(timer);



document.getElementById("questionBox")
.style.display="none";


showResult();


}







// RESULT


function showResult(){



let total =
tests[testName].questions.length;



let percent =
Math.round((score/total)*100);



let result = `


<div class="resultCard">


<h1>
🏫 Tukadoji Gramin Vidyalaya
</h1>


<h2>
Test Result
</h2>


<hr>


<h2>
Score : ${score}/${total}
</h2>


<h3>
Percentage : ${percent}%
</h3>


<p>
Date : ${new Date().toLocaleDateString()}
</p>


</div>


`;



document.getElementById("result").innerHTML=result;


document.getElementById("result").style.display="block";


}