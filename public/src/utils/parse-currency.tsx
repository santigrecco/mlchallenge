/**
 * Parse currency id into cash sign
 * @param currency
 */
export const parseCurrency = currency => {
   return currencies[currency];
};

const currencies = {
   USD: "U$S",
   ARS: "$",
};
