//REWORKED VERSION FOR April Prep session


//You Can Name a function by : "function [FunctionName](){}" 
//To autoindent in Visual Studio Code press Ctrl+Alt+F
function BirthDay() {
	// Use the "document.getElementById("[idname]").value" in order to tell JavaScript where the element is on the HTML...//
	//... File- usually detailed in the "id=[idName]" section of an element. Use the ".value" at the end to store the contents of an input element...//
	//... Otherwise, the "document.getElementById" function will print out the name of the input element rather than its contents!//

	var dayofbirthinput = document.getElementById('DayOfBirth').value;
	var monthinput = document.getElementById("MonthOfBirth").value - 1;
	var yearinput = document.getElementById("YearOfBirth").value;

	//alert("Confirm You were born on the " + dayofbirthinput + "of month " + monthinput);

	CheckDay();
	CheckMonth();
	CheckGender();
	//Assign a variable to a function in order to store the function's return value
	var daynumber = Main();
	//alert(daynumber);
	var Gender = CheckGender();
	var AkanName = DayName();
	//alert(AkanName)
	// To Return a Functions output Back to HTML, assign a returned Variable to a Document Object Model (by Id or Name) 
	// With an appropriate text output element. Below , I've assigned AkanName to the div section with id "NameOutput" 
	//And with <p> sections so that the output can be seen
	document.getElementById("NameOutput").innerText = AkanName;

	function CheckDay() {
		var dayofbirthinput = document.getElementById("DayOfBirth").value;

		if (dayofbirthinput > 31 || (dayofbirthinput < 1)) {

			alert("INVALID DAY OF BIRTH DETAILS, PLEASE REENTER");
			//use the code below to terminate a javascript program
			process.exit(0);
		}
	}


	function CheckMonth() {
		var monthinput = document.getElementById("MonthOfBirth").value;
		// Use the OR Operator ["||"] to add an additional condition to an if statement e.g if (age <18 || (age >25)){alert("too old")}
		if (monthinput > 12 || (monthinput < 1)) {

			alert("INVALID MONTH DETAILS, PLEASE REENTER");
			process.exit(0);
		}

	}

	function CheckGender() {
		var gender = document.getElementById("Gender").value;

		if (gender == "Male") {
			gender = 1;
			//alert("gender value is " + gender);
			return gender;
		}

		else (gender == "Female")
		{
			gender = 2;
			//alert("gender value is " + gender);
			return gender;
		}
	}

	function Main() {

		var FullDate = new Date();
		FullDate.setDate(dayofbirthinput);
		FullDate.setMonth(monthinput);
		FullDate.setFullYear(yearinput);
		alert(FullDate);
		DayNumber = FullDate.getDay();
		return DayNumber;
	}

	function DayName() {
		if (Gender == 1) {

			var DayOfBirth = daynumber;
			var WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			var AkanName;
			if (DayOfBirth == 0) {
				WeekDays = [0];
				var name = "Kwasi";
				return name;
			}
			if (DayOfBirth == 1) {
				WeekDays = [1];
				var name = "Kwadwo";
				return name;
			}
			if (DayOfBirth == 2) {
				WeekDays = [2];
				var name = "Kwabena";
				return name;
			}
			if (DayOfBirth == 3) {
				WeekDays = [3];
				var name = "Kwaku";
				return name;
			}
			if (DayOfBirth == 4) {
				WeekDays = [4];
				var name = "Yaw";
				return name;
			}
			if (DayOfBirth == 5) {
				WeekDays = [5];
				var name = "Kofi";
				return name;
			}
			if (DayOfBirth == 6) {
				WeekDays = [6];
				var name = "Kwame";
				return name;
			}
		}

		else (Gender == 2)
		{

			var DayOfBirth = daynumber;
			var WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			var AkanName;
			if (DayOfBirth == 0) {
				WeekDays = [0];
				var name = "Akosua";
				return name;
			}
			if (DayOfBirth == 1) {
				WeekDays = [1];
				var name = "Adowa";
				return name;
			}
			if (DayOfBirth == 2) {
				WeekDays = [2];
				var name = "Abenaa";
				return name;
			}
			if (DayOfBirth == 3) {
				WeekDays = [3];
				var name = "Akua";
				return name;
			}
			if (DayOfBirth == 4) {
				WeekDays = [4];
				var name = "Yaa";
				return name;
			}
			if (DayOfBirth == 5) {
				WeekDays = [5];
				var name = "Afua";
				return name;
			}
			if (DayOfBirth == 6) {
				WeekDays = [6];
				var name = "Ama";
				return name;
			}
		}









	}
}

