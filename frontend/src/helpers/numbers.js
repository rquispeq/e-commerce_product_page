export const formatPrice = (price) => {
    return new Intl.NumberFormat("es-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "narrowSymbol",
    }).format(price)
  }
  