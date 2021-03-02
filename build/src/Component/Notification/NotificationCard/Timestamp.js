import React from 'react';
import Format from '../../../../Utilities/Format';
const Timestamp = ({ timestamp }) => {
    const { formatDate, formatTime } = Format;
    const now = new Date();
    const displayDate = now.toDateString() != timestamp.toDateString();
    return (React.createElement("div", { className: 'timestamp' },
        displayDate
            ? `${formatDate(timestamp)} `
            : null,
        formatTime(timestamp)));
};
export default Timestamp;
//# sourceMappingURL=Timestamp.js.map