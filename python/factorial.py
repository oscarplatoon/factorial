def factorial(num):
	# your code here
	if num < 0:
		return
	elif num == 0 or num == 1:
		return 1
	else:
		return num * factorial(num - 1)

print(factorial(-1))
print(factorial(0))
print(factorial(1))
print(factorial(8))