const formatNumber = (input: string | number): string => {
  // اطمینان از اینکه ورودی به صورت رشته تبدیل شود
  const str = input.toString();

  // استفاده از regex برای جدا کردن اعداد سه‌تا سه‌تا
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default formatNumber;
