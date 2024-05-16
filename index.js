import express from 'express';
import executeTable from './config/index.js';
import routes from './routes/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from './middleware/logger.js';
import handlingError from './middleware/handlingError.js';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;
app.use(express.json()).use(express.urlencoded({ extended: true }));
executeTable();
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use(logger);
app.use(handlingError);

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
