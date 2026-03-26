from pydantic import BaseModel

class TradeRequest(BaseModel):
    stock: str
    quantity: int
    price: float