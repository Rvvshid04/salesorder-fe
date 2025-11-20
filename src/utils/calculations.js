export const calculateExcl = (qty, price) => qty * price;
export const calculateTaxAmount = (excl, taxRate) => (excl * taxRate) / 100;
export const calculateIncl = (excl, taxAmount) => excl + taxAmount;
