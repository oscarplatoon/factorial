def factorial(num):
	# your code here
	fact = 1

	if num < 0:
		return None
	
	if num == 0:
		return 1
	
	while num > 0:
		fact = fact * num
		num -= 1
	
	return fact
