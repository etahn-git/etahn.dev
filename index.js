const path = require('path');
const express = require('express');

 
const app = express();

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
	return response.sendFile('main.html', { root: '.' });
});

app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  });


const port = '53135';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));