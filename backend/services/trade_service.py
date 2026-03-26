portfolio = []
transactions = []

def buy_stock(data):
    portfolio.append(data)
    transactions.append({**data, "type": "BUY"})
    return {"message": "Stock bought"}

def sell_stock(data):
    transactions.append({**data, "type": "SELL"})
    return {"message": "Stock sold"}