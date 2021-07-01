import * as Render from './Render';
import * as Static from './Static';

export * as Render from './Render';
export * as Static from './Static';

export const inject = async ({ html, css, js }: {
  html: string;
  css: string;
  js: string;
}) => (
  html
    .replace('<!--STYLE-->', Render.style(css))
    .replace('<!--SCRIPT-->', Render.script(js))
);

export const create = async (injection: string) => inject({
  html: await Static.read('index.html'),
  css: await Static.read('style.css'),
  js: injection + await Static.read('script.js')
});