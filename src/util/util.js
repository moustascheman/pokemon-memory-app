

export function FormatTitle(titleString){
    const firstLetter = titleString.charAt(0).toUpperCase();
    const remLetters = titleString.slice(1);
    return firstLetter + remLetters;
}