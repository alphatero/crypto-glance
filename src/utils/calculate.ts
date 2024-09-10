import bn from 'bignumber.js';

export const calculateUsd = (balance?: string, price?: string) => {
  if (!balance || !price) {
    return '--';
  }
  return bn(balance).multipliedBy(price).toNumber();
}