from fastapi import APIRouter
from schemas.trade_schema import TradeRequest
from services.trade_service import buy_stock, sell_stock

router = APIRouter(prefix="/trade", tags=["Trade"])

@router.post("/buy")
def buy(data: TradeRequest):
    return buy_stock(data.dict())

@router.post("/sell")
def sell(data: TradeRequest):
    return sell_stock(data.dict())