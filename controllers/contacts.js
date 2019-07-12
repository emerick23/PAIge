var Contact = require('../models/contact')
var User = require('../models/user')

async function create(req, res) {
    // const contact = new Contact(req.body.contact)
    User.findById(req.body.user._id, function(err, user) {
        user.contacts.push(req.body.contact)
        user.save()
    })
    try {
        // await contact.save()
        index(req, res)
    } catch (err) {
        req.json({err})
    }
}

async function index(req, res) {
    await User.findById(req.body.user._id, function(err, user) {
        let contacts = user.contacts
        res.json(contacts)
    })
    
//     const contacts = await Contact.find({})
//     res.json(contacts)
}

module.exports = {
    create,
    index
}