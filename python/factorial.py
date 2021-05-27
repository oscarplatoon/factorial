def factorial(num):
    if not isinstance(num, int):
        return None
    if num < 0:
        return None
    
    product = 1
    for n in range(num):
        product = product * (n + 1)

    return product
