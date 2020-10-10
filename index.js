const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'html'
})

app.engine('html', hbs.engine)
app.set('view engine', 'html')
app.set('views', 'views')

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/about', (req, res) => {
	res.render('about')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})

