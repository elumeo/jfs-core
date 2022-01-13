import React from 'react';
import Stateless from 'Component/App/Stateless';
import HelloWorld from './HelloWorld';
import de from 'Setup/Locale/de.json';
import '@cypress/react'
import { mount } from '@cypress/react';

describe('This test', () => {
  it('compares pixels', () => {
    mount(
      <Stateless
        locale='de'
        messages={de}>
        <HelloWorld/>
      </Stateless>
    );
    cy.viewport(1920, 1080);
    cy.get('body').matchImageSnapshot();
  })
});
