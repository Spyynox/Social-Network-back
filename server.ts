import express from 'express';
const app = express();

console.log('express');


app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
