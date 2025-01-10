const formatNumber = (input: string | number = 0): string => {
  const str = input.toString();
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default formatNumber;
