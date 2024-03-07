# Sales Forecasting Tool Implementation

class SalesForecastingTool:
    def __init__(self, model):
        """
        Initialize the SalesForecastingTool.

        Parameters:
        - model: An instance of the SalesForecastingModel class.
        """
        self.model = model

    def generate_forecast(self, input_data):
        """
        Generate sales forecast using the sales forecasting model.

        Parameters:
        - input_data: The input data for generating forecast.

        Returns:
        - forecast: The generated sales forecast.
        """
        return self.model.forecast_sales(input_data)
