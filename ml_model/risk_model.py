def analyze_portfolio(portfolio):
    """
    Analyzes a stock portfolio and returns risk level and loss probability.

    Args:
        portfolio (list): A list of dicts with keys: 'stock', 'quantity', 'price'
                          Example: [{"stock": "AAPL", "quantity": 10, "price": 150}]

    Returns:
        dict: {"risk": "High/Medium/Low", "loss_probability": float}
    """

    # Step 1: Calculate the total portfolio value
    total_value = sum(item["quantity"] * item["price"] for item in portfolio)

    # Edge case: empty portfolio
    if total_value == 0:
        return {"risk": "Low", "loss_probability": 0.0}

    # Step 2: Find the value of the largest single investment
    largest_investment = max(item["quantity"] * item["price"] for item in portfolio)

    # Step 3: Calculate concentration (how dominant the biggest holding is)
    concentration = largest_investment / total_value

    # Step 4: Determine risk level based on concentration thresholds
    if concentration > 0.6:
        risk = "High"
        loss_probability = 0.7
    elif concentration >= 0.3:
        risk = "Medium"
        loss_probability = 0.4
    else:
        risk = "Low"
        loss_probability = 0.2

    return {"risk": risk, "loss_probability": loss_probability}


