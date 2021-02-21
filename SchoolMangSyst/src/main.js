var students = [];
    let nameInputEl = document.getElementById('name');
    let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');

document.getElementById('submit').addEventListener('click', (e) => {
	e.preventDefault();
    let x = 20;
	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

    
    
});


function inputValidation(name, id, gdpa) {
	// check for the value of each element
    let x = 30;

	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}
}

function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
		
	};
	students.push(student);
	console.log('students array: ', students);  
	showMessage('success');
	display_array();
	
}


var count=0;
function display_array(name,id,gdpa){
var S_row=document.createElement("S_row"); 
S_row.innerHTML= "<br/>"+ students[count].name +'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ students[count].id + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +students[count].gdpa
 +'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
document.getElementById('Table').appendChild(S_row); 
Dbutton(this);
count=count+1;

}

function Dbutton() {
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Delete";
	document.getElementById('Table').appendChild(btn);
	//document.appendElemenrBtId('btn').onclick= function() {myDeleteFunction()};
	
  }

function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!')
	
    }
	else{
        alert('Faild to add student')
    }
}

function myDeleteFunction(r) {
	//students.pop(r);
	//students(r)=[];
	//document.getElementById("Table").deleteRow(r);

	

}

function SearchStu(Sid){
	for(var z=0 ; z <students.length ; z++){
		if(students[z].id==Sid)
		return z;
	}
	return -1;
}
