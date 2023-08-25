export const formatCurrency = (value: number | null): string => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value ?? 0);
};
