var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';
import React from 'react';
import HelloWorld from './HelloWorld';
test('Pixels match', () => __awaiter(void 0, void 0, void 0, function* () {
    render(React.createElement(HelloWorld, null));
    expect(yield generateImage()).toMatchImageSnapshot();
}));
