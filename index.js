const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./public'));

app.get('/', (req, res) => {
	res.status(200).sendFile(__dirname +  '/views/index1.html');
});

app.get('/page2', (req, res, next) => {
	res.status(200).sendFile(__dirname +  '/views/index2.html');
});

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});