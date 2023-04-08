import express from 'express';
const app = express();

console.log(11);

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
