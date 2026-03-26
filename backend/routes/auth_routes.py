from fastapi import APIRouter
from schemas.user_schema import UserCreate
from services.auth_service import signup, login

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/signup")
def signup_user(user: UserCreate):
    return signup(user.dict())

@router.post("/login")
def login_user(user: UserCreate):
    return login(user.dict())