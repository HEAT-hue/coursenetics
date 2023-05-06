export function extractNumbersFromString(value: string): string {
    let numberString = "";
    for (let i = 0; i < value.length; ++i) {
        const character = value.charAt(i);

        if (!isNaN(Number(character)) && character != " ") {
            numberString += character;
        }
    }

    return numberString
}