const { program} = require('commander');
const express = require('express');
const app = express();

program
  .requiredOption('-h, --host <host>', 'server host')
  .requiredOption('-p, --port <port>', 'server port')
  .requiredOption('-c, --cache <cache>', 'cache directory path')
  .parse(process.argv);

const options = program.opts();

const host = options.host;
const port = options.port;
const cachePath = options.cache;

// Перевірка наявності обов’язкових параметрів
if (!host || !port || !cachePath) {
    console.error('Error: all options --host, --port, and --cache are required');
    process.exit(1);
  }
  

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

app.get('/', (req, res) => {
    res.send('Сервер працює!');
  });