from fastapi import APIRouter
from services.risk_service import calculate_risk

router = APIRouter(prefix="/risk", tags=["Risk"])

@router.get("/")
def risk():
    return calculate_risk()