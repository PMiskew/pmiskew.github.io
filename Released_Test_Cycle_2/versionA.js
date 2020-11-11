data = [	"Ani Defranco",50,true,"F",
			"Ziggy Marley",52,true,"M",
			"John Butler", 45,false,"M"]

//a) What is the index of the name of the third individual
//	 10
//b) What woudl the index of gender of the 20th individual be if they existed?
//	 index of name of 20th is (20 - 1)*5 = 95
//   offset from name is +2
//	 Answer is 95 + 2 = 97


function findUser(n) {
	//Approach 1:
	//You could start with result with 5 elements since you know the size 
	//Problem: This does not return an empty
	//result = ["","","",""] //A1
	
	//Approach 2: 
	//Start with an empty result and push on the elements as needed.  In this case
	//we treat result as a stack.

	result = [] //A2

	for (i = 0; i < data.length; i = i + 5) {
		
		if (data[i] === n) {
			//APPROACH 1
			//ctr = 0 
			for (j = i; j < i + 4; j = j + 1) {
				
				//APPROACH 1
				//result[ctr] = data[j] //A1
				//ctr = ctr + 1 //A1
				//APPROACH 2
				//Note for HL - result is being treated as a stack here
				result.push(data[j]) //A2


			}
		}
	}

	//APPROACH 1:
	//if (result[0] === "") { //A1
	//	return [] //A1
	//}//A1

	return result //A1

	//APPROACH 2
	//return result //A2

}


function removeAttribute(a, n) {


	result = []
	ctr = 0;
	for (i = 0; i < a.length; i = i + 1) {
		
		if (ctr != n) {  
			result.push(a[i])
		}
		ctr = ctr + 1
		if (ctr === 4){
			ctr = 0
		}

	}

	return result

}

//console.log(findUser("Ani Defranco"))
//console.log(findUser("Bob Dylan"))

console.log(removeAttribute(data,3))


