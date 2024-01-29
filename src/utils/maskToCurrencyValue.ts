/**
 * The function `maskToCurrencyValue` takes a string value and returns it formatted as a currency value
 * with a "R$" prefix and commas for thousands separators.
 * @param {string} value - A string representing a numerical value.
 * @returns a string value that represents a currency value in the format "R$ X.XXX,XX".
 */
export const maskToCurrencyValue = (value: string): string => {
	const partes = value.split(".");
	partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return "R$" + partes.join(".");
};
