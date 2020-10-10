const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
	res.render('add', {
		title: 'добавить курс',
		isAdd: true
	})
})

module.exports = router
