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

//A: Index of higest elevation is 6
//B: Index of lowest elevation is 0

function roundAverageElevation(d){


	sum = 0

	for (i = 0; i < d.length; i = i + 1) {

		sum = sum + d[i]

	}

	average = sum/d.length

	average = average/10
	average = Math.round(average)
	average = average * 10
	return average

}

function countPeaks(d) {

	count = 0;

	for (i = 1; i < d.length - 1; i = i + 1) {

		if (d[i - 1] < d[i] && d[i] > d[i + 1]) {
			count = count + 1
		}

	}

	return count
}

console.log(roundAverageElevation(DATA1))
console.log(countPeaks(DATA1))




