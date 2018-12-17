/**
 *  Recives an string and return
 *  the same string capitalized
 * @param aString
 */
export const capitalize = (aString): string => {
   return aString
      .trim()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
};
