/**
 * Truncates a string to a given length and adds an ellipsis
 *
 * @param text string
 * @param maxLength number
 * @param lastChars number
 * @returns string
 */
export function truncateText(
  text: string,
  maxLength: number,
  lastChars?: number,
) {
  if (text.length <= maxLength) return text;
  const truncated = text.substring(0, maxLength);

  if (lastChars)
    return truncated + "..." + text.substring(text.length - lastChars);
  return truncated + "...";
}

/**
 * Get initials from a full name
 *
 * @param fullName string
 * @returns
 */
export function getInitials(fullName: string): string {
  const names = fullName.split(" ");
  const firstInitial = names[0][0];

  if (names.length === 2) {
    const lastInitial = names[1][0];
    return firstInitial.toUpperCase() + lastInitial.toUpperCase();
  }

  return firstInitial.toUpperCase();
}

/**
 * Formats a currency amount based on the country.
 * @param {number} amount - The currency amount to format.
 * @param {string} currencyCode - The ISO 4217 currency code.
 * @param {string} locale - The BCP 47 language tag representing the locale.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(
  amount: number,
  currencyCode = "USD",
  locale = "en-US",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
}

/**
 * Formats a currency amount as a decimal number based on the locale.
 * @param {number} amount - The currency amount to format.
 * @param {string} locale - The BCP 47 language tag representing the locale.
 * @returns {string} The formatted decimal string.
 */
export function formatNumber(amount: number, locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "decimal",
  }).format(amount);
}

/**
 * Capitalizes the first letter of each word in a string.
 * @param str The string to capitalize.
 * @returns The string with the first letter of each word capitalized.
 */
export function capitalizedWords(str: string): string {
  const words = str.split(/(?=[A-Z])/);
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );
  return capitalizedWords.join(" ");
}

/**
 * Get unique keys from an array of objects
 * @param array The array of objects
 * @returns An array of unique keys
 */
export function getColumnKeys<T extends object>(array: T[]): string[] {
  const keysSet = new Set<string>();

  array.forEach((item) => {
    Object.keys(item).forEach((key) => {
      // Ignore the "id" key as it is not needed in the table header
      if (key !== "id") {
        keysSet.add(key);
      }
    });
  });

  return Array.from(keysSet);
}

/**
 * Transforms an array of strings into an array of objects with "value" and "key" properties.
 * The "key" property is an alphabetical character starting from 'A'.
 *
 * @param inputArray - The array of strings to be transformed.
 * @returns An array of objects with "value" and "key" properties.
 * @example
 * enumerateArrayElements(["foo", "bar", "baz"]) // [{ value: "foo", key: "A" }, { value: "bar", key: "B" }, { value: "baz", key: "C" }]
 */
export function enumerateArrayElements(inputArray: string[]): { value: string; key: string }[] {
  return inputArray.map((value, index) => ({
    value,
    key: String.fromCharCode(65 + index) // Using Unicode code to get alphabetical characters (A, B, C, ...)
  }));
}
