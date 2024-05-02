const http = require('http');

let countMain = 0;
let countAbout = 0;

const server = http.createServer((req, res) => {
  console.log('Запрос получен');

  if (req.url === '/') {
    res.writeHead(
      200,
      {'Content-Type': 'text/html; charset=UTF-8'},
    );

    countMain++;

    res.end(`<a href="/about">Обо мне</a><br>Посещений ${countMain}`);
  } else if (req.url === '/about') {
    res.writeHead(
      200,
      {'Content-Type': 'text/html; charset=UTF-8'},
    );

    countAbout++;

    res.end(`<a href="/">Главная</a><br>Посещений ${countAbout}`);
  } else {
    res.writeHead(
      404,
      {'Content-Type': 'text/html; charset=UTF-8'},
    );

    res.end('<h1>Страница не найдена!</h1>');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});