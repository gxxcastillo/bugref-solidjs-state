import path from 'path';
import express from 'express';
import { renderToStream, renderToString } from 'solid-js/web';

import { createServer as createViteServer } from 'vite';

import { App } from './App';

export async function createServer() {
  const app = express();
  const port = 3100;

  app.use(express.static('./dist/public'));
  app.get('(.*)', (req, res) => renderToStream(() => <App />).pipe(res));

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

createServer();
