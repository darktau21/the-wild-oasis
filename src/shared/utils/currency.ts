export const formatCurrency = (value: null | number): string => {
  return new Intl.NumberFormat('en', {
    currency: 'USD',
    style: 'currency',
  }).format(value ?? 0);
};
