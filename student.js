/*
================================================

ABC INTERNATIONAL SCHOOL

PREMIUM STUDENT PORTAL JS

Features:

✔ Student Login Check
✔ Dynamic Profile
✔ Result System
✔ Subject Marks
✔ Attendance
✔ Month Search
✔ Test Open
✔ Logout

================================================
*/



// ================= LOGIN CHECK =================


let studentID = localStorage.getItem("studentID");



if(!studentID){


window.location.href="index.html";


}






// ================= LOAD STUDENT =================



let student = students[studentID];



if(!student){


alert("Student Data Not Found");


localStorage.removeItem("studentID");


window.location.href="index.html";


}









// ================= PROFILE =================



function setData(id,value){


let element=document.getElementById(id);


if(element){

element.innerHTML=value;

}


}





setData(
"name",
student.name
);



setData(
"class",
"Class : "+student.class
);



setData(
"roll",
"Roll No : "+student.roll
);



setData(
"year",
"Academic Year : "+student.year
);



// ================= BASIC RESULT =================



if(student.result){



setData(
"result",

`

Exam :

${student.result.exam}

<br><br>


Status :

<b>
${student.result.status}
</b>


<br><br>


Marks :

${student.result.totalMarks}


<br><br>


Percentage :

${student.result.percentage}%


<br><br>


Grade :

${student.result.grade}

`

);


}









// ================= PREMIUM MARKS RESULT =================



let subjects = student.subjects || {};



let table="";


let total=0;



for(let sub in subjects){



let mark = Number(subjects[sub]);


total += mark;



let grade;



if(mark>=90)

grade="A+";


else if(mark>=75)

grade="A";


else if(mark>=60)

grade="B";


else

grade="C";




table +=

`

<tr>


<td>

${sub}

</td>



<td>

${mark}

</td>



<td>

100

</td>



<td>

${grade}

</td>



</tr>


`;



}







setData(
"marksTable",
table
);







let totalSubject =
Object.keys(subjects).length;



let maxMarks =
totalSubject*100;





let percentage =


Math.round(

(total/maxMarks)*100

);







setData(
"totalMarks",
total+" / "+maxMarks
);




setData(
"percentage",

percentage+"%"

);






let finalGrade;



if(percentage>=90)

finalGrade="A+";


else if(percentage>=75)

finalGrade="A";


else if(percentage>=60)

finalGrade="B";


else

finalGrade="C";






setData(
"grade",
finalGrade
);







setData(

"status",

percentage>=35

?

"PASS ✅"

:

"FAIL ❌"

);







setData(

"remark",

percentage>=75

?

"Excellent Performance ⭐ Keep Growing"

:

"Need More Practice 💪 Work Hard"

);







setData(

"resultName",

student.name

);












// ================= ATTENDANCE =================



function changeMonth(){



let month =

document.getElementById("month").value;




let present =

student.attendance?.[month] || 0;



setData(

"attendance",

`

Month :

<b>${month}</b>

<br><br>

Present Days :

<b>${present}</b>

`

);






// Attendance Bar



let bar=

document.getElementById("attendanceBar");



if(bar){


let percent=

Math.min(

Math.round(

(present/25)*100

),

100

);



bar.style.width=

percent+"%";



}





}






if(document.getElementById("month")){


changeMonth();


}









// ================= OPEN TEST =================



function openTest(){


window.location.href="test.html";


}








// ================= LOGOUT =================



function logout(){



localStorage.removeItem(
"studentID"
);



window.location.href="index.html";


}








// ================= RESULT SAVE =================



function saveStudentResult(){


localStorage.setItem(

"result_"+studentID,

"saved"

);



alert(

"✅ Result Saved Successfully"

);



}






/*
================================================

END STUDENT PORTAL JS

Dynamic Working:

Login
 ↓
Student Data
 ↓
Profile
 ↓
Result
 ↓
Attendance
 ↓
Test

================================================
*/


setData(
"examName",
student.result.exam
);


setData(
"resultClass",
student.class
);


setData(
"outOfMarks",
Object.keys(subjects).length*100
);