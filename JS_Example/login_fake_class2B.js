//Take Away:
// 1. Notice how JS and Python look very similar
// 2. We typically run JS code through a browser. 
//			a. Paste JS Code right into your terminal
//			b. Run it via a web-page

//What is the difference between var, let and const

var uNames = []
var pWords = []

//Populate our uNames an pWords with the JSON File
//This requires that I use something called a fetch 
//A fetch used to tell you webpage to go out and getsomething
//This takes time and the code keeps running. 
//BIG IDEA: Asycronous processing and the funny things that happen
//Keep in mind promises - A fetch returns  promise 

//a link to the json file
var url = "https://raw.githubusercontent.com/PMiskew/pmiskew.github.io/main/JS_Example/logindata.json"


console.log(checkLoginALT("user1@test.com","pword1"))

fetch(url, {})
.then(response => response.json())
.then(result => {
	console.log(result)

	for (i = 0; i < result.length; i = i + 1) {
		uNames.push(result[i]["id"])
		pWords.push(result[i]["password"])
	}
	console.log(uNames)
	console.log(pWords)

});



//How do I check hte login 
//Step 1: Grab the form
var mlogin = document.getElementById("modal-login")
var loginForm = document.getElementById("login-form");
var homePage = document.getElementById("home")
var landingPage = document.getElementById('landing')



//Step 2: Bind an event listener
//Notice: In the other section I used JQuery to do this and I did it in a different location
loginForm.addEventListener("submit",function(e) {

	e.preventDefault() //stops the form from reloading the page
	

	console.log(e)
	//Can you access the information the user has entered and store them in variables
	//Check if they are valid
	email = document.getElementById('login-email').value;
	password = document.getElementById('login-password').value;

	result = checkLoginALT(email,password);
	
	if (result == true) {

		homePage.style.display = "block"
		landingPage.style.display = "none"

	}


	$(mlogin).modal("close") //close modal




});





function checkLoginALT(u, p) {


	

	//The below loop is a linear search: We are just checking
	//to see if u exists in the list. 
	for (i = 0; i < uNames.length; i = i + 1) {

		if (uNames[i] === u) {
			if (pWords[i] == p) {
				return true;
			}
			else{
				return false
			}
		}


	}
	
	
	return false;

}

console.log(checkLoginALT("user1@test.com","pword1"))

function checkLogin(u, p) {

 	//assuming invalid values u and p
	let uvalid = false;
	let pvalid = false;
	let index = 0;

	//The below loop is a linear search: We are just checking
	//to see if u exists in the list. 
	for (i = 0; i < uNames.length; i = i + 1) {

		//JS == verse ===
		// == compares only the valie "1" == 1 --> True
		// === compares value and type "1" === 1 --> False
		if (uNames[i] === u) {
			uvalid = true;
			index = i;
		}


	}
	if (pWords[index] == p) {
		pvalid = true;
	}
	if (uvalid === true && pvalid == true) {
		return true;
	}
	return false

}






