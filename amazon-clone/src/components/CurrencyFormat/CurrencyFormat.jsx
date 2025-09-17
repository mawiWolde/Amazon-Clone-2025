import React from "react";
const CurrencyFormat = ({ amount }) => {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(amount || 0);
  return <div>{formattedAmount}</div>;
};
export default CurrencyFormat;
