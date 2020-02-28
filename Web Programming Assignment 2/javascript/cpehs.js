function cancel(){
	document.getElementById("reportcard").reset()
}

function save(){
	var name = document.getElementById("stu_name").value; 
	var id = document.getElementById("id").value;
		alert("Saving file for "+name+"-"+id);
}

function email(){
	var email = document.getElementById("par_email").value;
	var link = "mailto:"
			 + email
             + "?cc=info@cpe.edu.ag	"
             + "&subject=" + escape("Report Card is ready")
             + "&body=" + escape("Please see attachment.")
    ;

    window.location.href = link;
}

function exit(theform) {
	if (document.all || document.getElementById) {
		for (i = 0; i < theform.length; i++) {
		var formElement = theform.elements[i];
			if (true) {
				formElement.disabled = true;
			}
		}
	}
}

function calcLetGrade(){
	var subject = document.getElementsByName("sub");
	var test1 = document.getElementsByName("test1");
	var test2 = document.getElementsByName("test2");
	var finals = document.getElementsByName("finals");
	var lettergrade = document.getElementsByName("letgrade");
	var invalid_flag = 0;

	for (var i = 0; i <=8; i++) {	
		if (test1[i].value < 0 || test1[i].value > 100){  
			alert("Invalid Grade Entered!");
			test1[i].value = ""
			invalid_flag = 1;
		}
		if (test2[i].value < 0 || test2[i].value > 100){
			alert("Invalid Grade Entered!");
			test2[i].value = ""			
			invalid_flag = 1;
		}
		if (finals[i].value < 0 || finals[i].value > 100){
			alert("Invalid Grade Entered!");
			finals[i].value = ""
			invalid_flag = 1;
		}

		if (invalid_flag == 0){
			var sum = 0;			

			sum = parseInt((test1[i].value)) + parseInt((test2[i].value)) + parseInt((finals[i].value));

			var average = parseFloat(sum/3);

			if (average >= 90)
				lettergrade[i].value = "A";
			else if (average >= 80)
				lettergrade[i].value = "B+";
			else if (average >= 70)
				lettergrade[i].value = "B";
			else if (average >= 60)
				lettergrade[i].value = "C+";
			else if (average >= 50)
				lettergrade[i].value = "C";
			else 
				lettergrade[i].value = "D";
		}
	}

}