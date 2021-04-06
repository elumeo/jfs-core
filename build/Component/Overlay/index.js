import { createPortal } from 'react-dom';
const Overlay = ({ children }) => createPortal(children, document.getElementById('overlay'));
export default Overlay;
//# sourceMappingURL=index.js.map