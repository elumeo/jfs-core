import React from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
}

const Overlay = ({ children }: Props) => createPortal(children, document.getElementById('overlay'));

export default Overlay;
