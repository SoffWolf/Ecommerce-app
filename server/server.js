import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", (req, res) => {
	res.send(data.products);
})

app.listen(3001, (req, res) => {
	console.log("Running on 3001");
})
