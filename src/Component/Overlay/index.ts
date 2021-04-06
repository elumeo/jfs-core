import React from 'react';
import { createPortal } from 'react-dom';

const Overlay: React.FC = ({ children }) => createPortal(
  children,
  document.getElementById('overlay')
);

export default Overlay;
