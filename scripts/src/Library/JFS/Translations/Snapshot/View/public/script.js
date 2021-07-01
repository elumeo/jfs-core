const title = document.createElement('h1');
title.innerText = 'Missing translations';

const csvButton = document.createElement('a');
csvButton.classList.add('export-csv-button');
csvButton.href = csvPath;
csvButton.innerText = 'Export CSV';

const header = document.createElement('div');
header.classList.add('header');
header.appendChild(title);
header.appendChild(csvButton);

const table = new DOMParser().parseFromString(htmlTable, 'text/html').firstChild.childNodes[1].firstChild;
table.classList.add('translations-table');
table.setAttribute('border', '1');

const root = document.getElementById('root');
root.appendChild(header);
root.appendChild(table);
