import { AVERAGE_READING_WORDS_PER_SECOND } from '../../Constant/Toast';
export const timeToRead = (text, min = 3000) => {
    const isString = (typeof text === 'string') || (text instanceof String);
    if (!isString) {
        return min;
    }
    const words = text.split(' ').length;
    const calculatedTimeout = words / AVERAGE_READING_WORDS_PER_SECOND * 1000;
    return Math.max(min, calculatedTimeout);
};
//# sourceMappingURL=TimeToRead.js.map