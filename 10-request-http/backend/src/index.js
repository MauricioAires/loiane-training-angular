const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();

/**
 * Middleware
 */

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

/**
 * Mesmo sendo localhost vai ser portas diferente logo domínios diferentes.
 */

const corsOptions = {
  origin: '*',
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

/**
 * Salvar o arquivo localmente.
 */

const multipartMiddleware = multipart({
  uploadDir: './uploads',
});

app.post('/upload', multipartMiddleware, (req, res) => {
  const files = req.files;

  console.log('[ARQUIVOS] ', files);

  res.json({
    message: files,
  });
});

/**
 * Retornar para o frontend caso ocorra algum erro no backend.
 */
app.use((err, req, res, next) =>
  res.json({
    error: err.message,
  }),
);

app.listen(8000, () => {
  console.log('Servidor porta 8000');
});
