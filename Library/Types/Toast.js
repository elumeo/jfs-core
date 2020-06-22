const AVERAGE_READING_WORDS_PER_MINUTE = 200;
const AVERAGE_READING_WORDS_PER_SECOND = AVERAGE_READING_WORDS_PER_MINUTE / 60;
export const timeToRead = (text, min = 3000) => {
    const isString = (typeof text === 'string') || (text instanceof String);
    if (!isString) {
        return min;
    }
    const words = text.split(' ').length;
    const calculatedTimeout = words / AVERAGE_READING_WORDS_PER_SECOND * 1000;
    return Math.max(min, calculatedTimeout);
};
//# sourceMappingURL=Toast.js.map