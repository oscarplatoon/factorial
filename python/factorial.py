def factorial(num):
	output = num
	for x in range (num, 1, -1):
		output = output * (x-1)

	return output

factorial (4)
