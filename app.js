var news = [
	{
		"title": "Why choose us over airconsole?",
		"text": ["Find out soon!"],
		"author": "JiroPlay Team",
		"date": "22/09/2017"
	},
	{
		"title": "Tuna and bacon",
		"text": ["HTML5 tutorials", "check them out"],
		"author": "thenewboston",
		"date": "09/11/2000"
	},
	{
		"title": "Easter Egg",
		"text": ["This is a some text.", "Enjoy it!!!!!", "There is actually no easter egg here..."],
		"author": "gregorypeck",
		"date": "27/13/2217"
	}
]

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