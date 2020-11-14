DATA1 = [	 100.4
			,124.3
			,122.1
			,167.3
			,180.3
			,199.1
			,210.1
			,167.2
			,155.4
			,143.1
		]

DATA2 = [
			 45.1
			,64.5
			,78.2
			,100.2
			,112.4
			,126.7
			,145.1
			,190.1
			,210.1
			,222.2
		]

#A: Index of higest elevation is 6
#B: Index of lowest elevation is 0

def roundAverageElevation(d):


	sum = 0

	for i in range(0,len(d),1):

		sum = sum + d[i]

	

	average = sum/len(d)

	average = average/10
	average = round(average)
	#average = (average + 0.5)//1
	average = average * 10

	return average

def countPeaks(d):

	count = 0;

	for i in range(1,len(d) - 1,1):

		if (d[i - 1] < d[i] and d[i] > d[i + 1]):
			count = count + 1
		

	

	return count

def isolateRange(d,a,b):

	result = []
	
	for i in range(0, len(d), 1):

		if (i < a or i > b):
			result.push(0)
		else:
			result.push(d[i])
		

	

	return result


print(roundAverageElevation(DATA1))
print(countPeaks(DATA1))



