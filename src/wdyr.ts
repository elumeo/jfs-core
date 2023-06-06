/// <reference types="@welldone-software/why-did-you-render" />
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ReactRedux = require('react-redux/dist/react-redux.js');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackExtraHooks: [
      [ReactRedux, 'useSelector'],
    ],
    exclude: [
      new RegExp('Virtuoso'),
      new RegExp('TableVirtuoso'),
    ]
  });
}
