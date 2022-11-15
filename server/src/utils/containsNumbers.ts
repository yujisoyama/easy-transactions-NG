export const containsNumbers = (string: string) => {
    // [0-9] = \d
    return /\d/.test(string);
}