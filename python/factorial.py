def factorial(num):
	# your code here
	if num == 0:
		return 1
	multiply = 1
	while num > 1:
		multiply = num * multiply
		num = num - 1
	return multiply
