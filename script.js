// Exchange rates for the currencies
const exchangeRates = {
    USD: 1.0,
    EUR: 0.85,
    GBP: 0.75,
    IND: 73.58,
    JPY: 110.57,
    CAD: 1.25,
    AUD: 1.35,
    CNY: 6.48,
    BRL: 5.25,
    ZAR: 15.03
  };
  
  function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
  
    if (isNaN(amount)) {
      document.getElementById("result").innerText = "Please enter a valid amount.";
      return;
    }
  
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
  
    const convertedAmount = (amount / fromRate) * toRate;
  
    document.getElementById("result").innerText = 
      `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  }
  