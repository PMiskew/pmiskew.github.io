//Take Away:
// 1. Notice how JS and Python look very similar
// 2. We typically run JS code through a browser. 
//			a. Paste JS Code right into your terminal
//			b. Run it via a web-page


//JS: let, var, const
var uNames = ["user1","user2","user3"]
var pWords = ["pword1","pword2","pword3"]


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

//console.log(checkLogin("user1","pword1"))
//console.log(checkLogin("user1","pword2"))
//console.log(checkLogin("user5","pword5"))
