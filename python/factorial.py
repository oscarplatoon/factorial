def factorial(num):
	if (not isinstance(num, int)):
		return('Number must be an integer greater than or equal to 0.')
	elif(num < 0):
		return('Number must be an integer greater than or equal to 0.')
	answer = 1
	while(num>0):
		answer *= num
		num -= 1
	return(answer)


