data = [	"Ani Defranco",50,True,"F",
			"Ziggy Marley",52,True,"M",
			"John Butler", 45,False,"M"]



def findUser(n):
	
	#result = ["","","",""] #A1
	
	
	result = [] #A2

	for i in range(0, len(data),1):
	
		if (data[i] == n):
			#ctr = 0 
			for j in range(i,i + 4,1):
				
				#result[ctr] = data[j] #A1
				#ctr = ctr + 1 #A1
				result.append(data[j]) #A2


			
		
	

	#if (result[0] === "") { #A1
	#	return [] #A1
	#}//A1

	#return result #A1

	#APPROACH 2
	return result #A2

def removeAttribute(a, n):


	result = []
	ctr = 0;
	for i in range(0, len(a),1): 
		
		if (ctr != n): 
			result.append(a[i])
		
		ctr = ctr + 1

		if (ctr == 4):
			ctr = 0
		

	

	return result



print(findUser("Ziggy Marley"))
print(findUser("Bob Dylan"))
print(removeAttribute(data,1))


