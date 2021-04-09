const express = require('express');
const app = express();
const cors = require('cors')

const postRouter = require('./src/posts');


app.use(cors({
    origin: '*',
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/people', postRouter);

app.listen(8000, () => {
  console.log('Starting server');
});
