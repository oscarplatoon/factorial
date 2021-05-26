def factorial(num):
	# your code here
	product = 1
	#            start, end + 1
	for i in range(1, num+1):
		product = product * i
		# print(product)

	return product
