def validate(user, passw):
	if user == "Kirby" and passw == "Kups":
		return True
	else:
		return False

def login():
	user = input("Enter Username: ")
	passw = input("Enter Password: ")

	if validate(user, passw):
		print("Loggin Successfully!")
	else:
		print("Invalid Username or Password")


login()




