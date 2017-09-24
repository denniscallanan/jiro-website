var news = [
	{
		"title": "JiroPlay coming soon!",
		"text": ["We hope JiroPlay will be available in the next 6 months.", "Before the end of 2018 the developers api should be completely ready allowing developers to easily create games for Jiro!"],
		"author": "JiroPlay Team",
		"date": "24/09/2017"
	}
]

const express = require('express')
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const session = require('express-session');
const app = express()

app.use('/static', express.static('static'))
app.use('/',       express.static('root'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({'secret': 'Ohhh... this is a secret msg gregory;;'}))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', function (req, res) {
	renderIfProceed(req, res, 'index.html')
})

app.get('/news', function(req, res) {
	renderIfProceed(req, res, 'news.html', {'news': news})
})

app.get('/proceed', function(req, res) {
	req.session.proceed = "indeed";
	res.send("welcome");
})

app.listen(process.env.PORT || 8000, function () {
	console.log('JiroPlay app is running!')
})

// FUNCTIONS

function renderIfProceed(req, res, page, data)
{
	if (req.session.proceed)
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
		res.render("not_password_protected.html");
	}
}