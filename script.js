function getFormvalue() {
    //Write your code here
const  firstname=document.getElementById("form1").elements["fname"].value;
	const  lastname= document.getElementById("form1").elements["lname"].value;

	const fullname = firstname + " " + lastname;
	alert(fullname);
}
