# HOW TO ... ?

### Create an SVG icon

We now use SVG icons like material ui. So we do not need to create an icon font anymore.

These are the steps to add an icon: 

1. create a new SVG as a react component in ```Component/Icon/SVG/YOUR_ICON_NAME```
2. wrap your SVG with the ```<Wrapper/>``` component from ``` ```Component/Icon/Wrapper```
3. make sure to set the fill color to ```'currentcolor'```
4. register your icon in ```Component/Icon/SVG/index.ts```

Example svg icon component in react:

```
import React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import Wrapper from '../Wrapper';

const BadgePercent: React.FC<SvgIconProps> = props => (
  <Wrapper {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(5.000000, 3.000000)" fill='currentcolor' fillRule="nonzero">
        <path d="M21.766,18.984 C21.375,20.218 20.75,21.531 19.844,22.89 C18.5,24.937 17.156,25.953 15.828,25.953 C15.297,25.953 14.578,25.781 13.64,25.453 C12.718,25.109 11.921,24.953 11.281,24.953 C10.656,24.953 9.906,25.125 9.062,25.469 C8.203,25.828 7.515,26 6.999,26 C5.39,26 3.843,24.641 2.296,21.953 C0.78,19.265 -0.001,16.656 -0.001,14.094 C-0.001,11.703 0.593,9.766 1.765,8.25 C2.937,6.75 4.406,6 6.203,6 C6.969,6 7.875,6.156 8.969,6.469 C10.047,6.782 10.766,6.938 11.125,6.938 C11.578,6.938 12.328,6.766 13.359,6.407 C14.39,6.063 15.296,5.876 16.062,5.876 C17.312,5.876 18.421,6.22 19.39,6.892 C19.937,7.267 20.484,7.798 21.015,8.455 C20.203,9.143 19.609,9.752 19.234,10.299 C18.562,11.268 18.218,12.346 18.218,13.533 C18.218,14.814 18.577,15.986 19.296,17.017 C20.015,18.048 20.843,18.704 21.765,18.986 L21.766,18.984 Z M15.891,0.656 C15.891,1.297 15.735,2.015 15.438,2.781 C15.125,3.562 14.641,4.281 13.985,4.937 C13.423,5.499 12.86,5.875 12.298,6.062 C11.939,6.171 11.407,6.265 10.673,6.328 C10.704,4.781 11.111,3.437 11.892,2.312 C12.673,1.187 13.986,0.421 15.798,4.4408921e-16 C15.829,0.141 15.861,0.25 15.876,0.344 C15.876,0.453 15.892,0.547 15.892,0.657 L15.891,0.656 Z"/>
      </g>
    </g>
  </Wrapper>
);

export default BadgePercent;
```
