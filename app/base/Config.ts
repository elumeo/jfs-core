let request = new XMLHttpRequest(), config;
request.open('GET', './config.json', false);
request.send(null);

if (request.status === 200) {
  config = JSON.parse(request.responseText);
}

export default config;