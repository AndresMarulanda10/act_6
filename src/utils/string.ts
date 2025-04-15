/**
 * The function splits the input string by dashes, capitalizes the first letter of each substring,
 * and then joins them with a space.
 */
export const humanize = (str: string) =>
  // Split by dash
  str
    .split('-')
    // Capitalize the first letter and keep the rest
    .map((subStr) => subStr[0]?.toUpperCase() + subStr.slice(1))
    // Join with a space
    .join(' ');
