//Take Away:
// 1. Notice how JS and Python look very similar
// 2. We typically run JS code through a browser. 
//			a. Paste JS Code right into your terminal
//			b. Run it via a web-page

//What is the difference between var, let and const

var uNames = ["user1","user2","user3"]
var pWords = ["pword1","pword2","pword3"]

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

x = checkLogin("user1","pword1")
console.log(x)




