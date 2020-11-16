//Take Away:
// 1. Notice how JS and Python look very similar
// 2. We typically run JS code through a browser. 
//			a. Paste JS Code right into your terminal
//			b. Run it via a web-page


//JS: let, var, const
var uNames = []
var pWords = []


let url = "https://github.com/PMiskew/pmiskew.github.io/blob/main/JS_Example/logindata.json"
fetch(url, {
	 
	})
	.then(response => response.json())
	.then(result => {
		console.log(result)
	})
	.catch(error => {
	  console.error('Error:', error);
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

//console.log(checkLogin("user1","pword1"))
//console.log(checkLogin("user1","pword2"))
//console.log(checkLogin("user5","pword5"))
