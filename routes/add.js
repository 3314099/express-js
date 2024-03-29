const {Router} = require('express')
const router = Router()
const Course = require('../models/course')

router.get('/', (req, res) => {
	res.render('add', {
		title: 'добавить курс',
		isAdd: true
	})
})

router.post('/', async (req, res) => {
	const course = new Course(req.body.title, req.body.price, req.body.imgUrl)
	await course.save()

	res.redirect('/courses')
})

module.exports = router
