from pydantic import BaseModel

class PortfolioResponse(BaseModel):
    stock: str
    quantity: int