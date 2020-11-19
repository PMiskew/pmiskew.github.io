//Take Away:
// 1. Notice how JS and Python look very similar
// 2. We typically run JS code through a browser. 
//			a. Paste JS Code right into your terminal
//			b. Run it via a web-page


//JS: let, var, const
var uNames = []
var pWords = []

//On the load of my page I am going to go out and access all
//of the data from my json file and update my lists. 

//Theory: We need to understand ASYNC process and a "promise"

var url = "https://raw.githubusercontent.com/PMiskew/pmiskew.github.io/main/JS_Example/logindata.json"

//fetch -> return a promise, a promise is an object that you can check before you do things
//then -> only run this code when the fetch is done. 
fetch(url, { })
	.then(response => response.json())
	.then(result => {

		for (i = 0; i < result.length; i = i + 1) {
			uNames.push(result[i]["id"])
			pWords.push(result[i]["password"])
		}

		//10 minutes - Find a way to copy the data from result
		//into each of the array uNames and pWords
		console.log(uNames)
		console.log(pWords)

		//Loop through result and update uNames and pWords
	});



function checkLogin(u, p) {

	val = false; //Assumes the u and p do not exists


	//Loop through uNames check 
	for (i = 0; i < uNames.length; i = i + 1) {

		if (uNames[i] === u) {

			if (pWords[i] === p) {
				val = true;
			}
		}

	}

	return val


}


//If the user and and password are here, why do I get false?
//console.log(checkLogin("user1@test.com","pword1"))
//console.log(checkLogin("user1","pword2"))
//console.log(checkLogin("user5","pword5"))
