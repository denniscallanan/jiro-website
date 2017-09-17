const express = require('express')
const app = express()

app.use('/static', express.static('static'))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
	res.render('index.html');
})

app.get('/news', function(req, res) {
	res.render('news.html');
})

app.listen(process.env.PORT || 8000, function () {
	console.log('JiroPlay app is running!');
})