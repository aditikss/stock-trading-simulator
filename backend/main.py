from fastapi import FastAPI
from routes import auth_routes, trade_routes, portfolio_routes, risk_routes

app = FastAPI()

app.include_router(auth_routes.router)
app.include_router(trade_routes.router)
app.include_router(portfolio_routes.router)
app.include_router(risk_routes.router)

@app.get("/")
def home():
    return {"message": "Stock Trading Simulator Running "}