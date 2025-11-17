

t = int(input("Enter the number of test cases: "))

for i in range(t):
    x, n = map(int, input("Enter x and n values: ").split())
    
    if n % 2 == 0:
        print(0)
    else:
        print(x)