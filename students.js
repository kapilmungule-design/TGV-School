/*
================================================
ABC INTERNATIONAL SCHOOL

STUDENT DATABASE

इस file में सभी students का data रखा गया है।
Login Code डालने पर इसी data से student की
जानकारी website पर दिखाई जाएगी।

Student Login Codes:

ABC1001
ABC1002
ABC1003

================================================
*/


const students = {



"ABC1001": {

name:"Rahul Sharma",

class:"10th A",

roll:"12",

year:"2026",

totalStudents:"45",

father:"Rajesh Sharma",


result:{

exam:"Mid Semester",

status:"PASS",

totalMarks:"456 / 500",

percentage:"91.2%",

grade:"A+"

},


subjects:{

Mathematics:95,

Science:92,

English:88,

SocialScience:90,

Computer:91

},


attendance:{

January:"24 / 26 Days",

February:"22 / 24 Days",

March:"25 / 26 Days"

}


},




"ABC1002": {


name:"Priya Patil",

class:"10th B",

roll:"18",

year:"2026",

totalStudents:"42",

father:"Suresh Patil",



result:{

exam:"Mid Semester",

status:"PASS",

totalMarks:"430 / 500",

percentage:"86%",

grade:"A"

},



subjects:{

Mathematics:88,

Science:85,

English:90,

SocialScience:82,

Computer:85

},



attendance:{

January:"23 / 26 Days",

February:"24 / 24 Days",

March:"23 / 26 Days"

}



},






"ABC1003": {



name:"Amit Verma",

class:"9th A",

roll:"07",

year:"2026",

totalStudents:"40",

father:"Vijay Verma",



result:{

exam:"Mid Semester",

status:"PASS",

totalMarks:"390 / 500",

percentage:"78%",

grade:"B+"

},



subjects:{

Mathematics:75,

Science:80,

English:82,

SocialScience:76,

Computer:77

},



attendance:{

January:"21 / 26 Days",

February:"20 / 24 Days",

March:"24 / 26 Days"

}


}





};


/*
================================================

नई Student Add करने के लिए:

"ABC1004":{

name:"",
class:"",
roll:"",
year:"",
totalStudents:"",

result:{},

subjects:{},

attendance:{}

}


बस इसी format में add करें।

================================================
*/


// ================= ID CARD DATA =================


document.getElementById("idName")
.innerHTML = student.name;


document.getElementById("idNumber")
.innerHTML = studentID;


document.getElementById("idClass")
.innerHTML = student.class;


document.getElementById("idRoll")
.innerHTML = student.roll;







// ================= DOWNLOAD RESULT =================


function downloadResult(){


alert(

"Result PDF Generation Started"

);


// बाद में PDF Generator connect करेंगे


}