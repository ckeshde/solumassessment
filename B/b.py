

t = int(input("Enter the number of test cases: "))

for i in range(t):
    n = int(input("Enter the total number of propulsion units: "))

    if n % 2 == 1 or n < 4:
        print(-1)
        continue

    max_crafts = n // 4

    min_crafts = n // 6
    if n % 6 != 0:
        min_crafts += 1  

    if min_crafts > max_crafts:
        print(-1)
    else:
        print(min_crafts, max_crafts)
