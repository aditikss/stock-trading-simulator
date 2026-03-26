from services.trade_service import portfolio

def calculate_risk():
    count = len(portfolio)

    if count <= 1:
        return {"risk": "High "}
    elif count <= 3:
        return {"risk": "Medium "}
    else:
        return {"risk": "Low "}