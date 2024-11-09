export const toArabicNumeral = (num: number | string): string => {
  if (num === '') return '';
  const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return num.toString().replace(/[0-9]/g, d => arabicNumerals[+d]);
};

export const fromArabicNumeral = (str: string): string => {
  return str.replace(/[٠-٩]/g, d => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
};