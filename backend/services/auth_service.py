users = []

def signup(user):
    users.append(user)
    return {"message": "User created"}

def login(user):
    for u in users:
        if u["username"] == user["username"] and u["password"] == user["password"]:
            return {"message": "Login success"}
    return {"message": "Invalid credentials"}