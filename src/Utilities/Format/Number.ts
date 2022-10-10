import { matchAllNonNumericOrSeperatorRegex, matchComma, matchFirstPoint } from './Currency';


export const limit = (number: number, min: number, max: number): number => {
    let result = number;
    if (min !== undefined && min !== null) {
        result = result > min
            ? result
            : min >= 0
                ? Math.abs(result)
                : min;
    }
    if (max !== undefined && max !== null) {
        result = Math.min(result, max);
    }
    return result;
}
export const parse = (number: string, min?: number, max?: number, numberOfDecimals = 2): number => {
    const floatable = number.replace(matchAllNonNumericOrSeperatorRegex, '')
        .replace(matchComma, '.')
        .replace(matchFirstPoint, '')
    const santized =
        floatable.length === 0
            || floatable.endsWith('.')
            || (floatable.length === 1 && floatable.startsWith('-'))
            ? floatable
            : (+limit((parseFloat(floatable)), min, max).toFixed(numberOfDecimals)).toString()
    return santized as unknown as number;
}