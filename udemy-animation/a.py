import functools
@functools.cache
def factorial(n) :
print(f'The value of (n=)')
return n * factorial(n-1) if n > 0 else 1
print (factorial (2))
print(factorial(4))