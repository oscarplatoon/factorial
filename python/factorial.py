def factorial(num):
	# your code here
	output = 1
	for i in range(num, 0, -1):
		if num >= 1:
			output *= i
		elif num == 0:
			print(1)
	print(output)

print(factorial(8))# == 40320)
print(factorial(18))# == 6402373705728000)
print(factorial(45))# == 119622220865480194561963161495657715064383733760000000000)