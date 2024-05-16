import express from 'express';
import executeTable from './config/index.js';
import routes from './routes/routes.js';

const app = express();
const PORT = 8080;
app.use(express.json()).use(express.urlencoded({ extended: true }));
executeTable();

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
