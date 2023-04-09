import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const products = [
    { id: 1, name: 'iPhone', price: 800 },
    { id: 2, name: 'iPad', price: 650 },
    { id: 3, name: 'iMac', price: 750 },
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(port);
