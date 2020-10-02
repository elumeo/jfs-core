import * as React from 'react';
import LoremIpsum from '../../../Mock/LoremIpsum.json';
export default ({ lines }) => (React.createElement(React.Fragment, null, Array(Math.ceil(lines / 8)).fill(null).map((_, index) => (React.createElement("p", { key: 'LoremIpsum' + index }, LoremIpsum.slice(index * 8, (index + 1) * 8))))));
//# sourceMappingURL=LoremIpsumText.js.map