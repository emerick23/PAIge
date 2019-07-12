const express = require('express')
const router = express.Router()
const contactsCtrl = require('../../controllers/contacts')

router.use(require('../../config/auth'))
router.post('/create', checkAuth, contactsCtrl.create)
router.post('/all', checkAuth, contactsCtrl.index)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'})
}

module.exports = router