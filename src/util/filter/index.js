export const formatNumber = number => {
    const defaultOptions = {
      significantDigits: 0,
      thousandsSeparator: ',',
      decimalSeparator: '.',
      symbol: '',
    };
  
    const currencyFormatter = (value, options) => {
      if (typeof value !== 'number') {
        value = 0.0;
      }
      options = {...defaultOptions, ...options};
      value = value.toFixed(options.significantDigits);
  
      const [currency] = value.split('.');
      return `${options.symbol} ${currency.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        options.thousandsSeparator,
      )}`;
    };
    return currencyFormatter(number);
  };
  
  export const formatDate = date => {
    let d = new Date(date);
    let formatted = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  
    return formatted;
  };