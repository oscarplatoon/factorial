def factorial(num):
	# your code here
	if num == 0:
		return 1
	else:
		return num * factorial(num - 1)

