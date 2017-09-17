const express = require('express')
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const session = require('express-session');
const app = express()

app.use('/static', express.static('static'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({'secret': 'Ohhh... this is a secret msg gregory;;'}))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', function (req, res) {
	renderIfPassword(req, res, 'index.html')
})

app.get('/news', function(req, res) {
	renderIfPassword(req, res, 'news.html')
})

app.post('/admin_login', function(req, res) {
	if (req.body.password == "kreggle90")
	{
		req.session.logged = "indeed";
		res.send("welcome");
	}
	else
	{
		res.send("you are not welcome");
	}
})

app.listen(process.env.PORT || 8000, function () {
	console.log('JiroPlay app is running!')
})

// FUNCTIONS

function renderIfPassword(req, res, page, data)
{
	if (req.session.logged)
	{
		if (data)
		{
			res.render(page, data)
		}
		else
		{
			res.render(page)
		}
	}
	else
	{
		res.render("password_protected.html");
	}
}