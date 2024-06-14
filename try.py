def add(numb1, numb2):
    return numb1 + numb2

def subtract(numb1, numb2):
    return numb1 - numb2

def multiply(numb1, numb2):
    return numb1 * numb2

def divide(numb1, numb2):
    if numb2 == 0:
        return "Division by zero is not allowed"
    return numb1 / numb2

operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
}

while True:
    print("Options:")
    print("add(+) \t subtract(-) \t multiply(*) \t divide(/)")
    
    userinput = input("Select: ")

    if userinput == "quit":
        break

    if userinput in operations:
        numb1 = float(input("Enter 1st Number: "))
        numb2 = float(input("Enter 2nd Number: "))
        operation_result = operations[userinput](numb1, numb2)
        print("Result: " + str(operation_result))
    else:
        print("Invalid input. Please enter a valid operation.")
