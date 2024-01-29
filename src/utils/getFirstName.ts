/**
 * The function extracts the first name from an email address using regular expressions in TypeScript.
 * @param {string} email - A string representing an email address.
 * @returns The function `getFirstNameFromEmail` returns a string, which is the first part of the email
 * address before the "@" symbol.
 */

export function getFirstNameFromEmail(email: string): string {
	const padrao = /^([^@]+)@/;
	const match = email.match(padrao);

	if (match) {
		return match[1];
	} else {
		throw new Error("Endereço de e-mail inválido.");
	}
}
