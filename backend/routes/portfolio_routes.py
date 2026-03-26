from fastapi import APIRouter
from services.portfolio_service import get_portfolio

router = APIRouter(prefix="/portfolio", tags=["Portfolio"])

@router.get("/")
def portfolio():
    return get_portfolio()