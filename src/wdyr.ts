/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="@welldone-software/why-did-you-render" />
import React from 'react';
declare const require: any
declare const process: any
if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  const ReactRedux = require('react-redux/lib');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackExtraHooks: [
      [ReactRedux as object, 'useSelector']
    ]
  });
}
