const express = require("express")
const router = express.Router()
const User = require("../models/userSchema")

router.post("/register", async (req, res) => {
    try {
        // console.log(req.body)
        const { name, password, email } = req.body
        if (!name || !password || !email) {
            return res.status(422).send({ error: 'No', value:'Some field are missing'})
        }
        // console.log({ name, password, email })
        if (await User.findOne({ email })) {
            return res.status(422).send({ error: 'No', value:'This email is already registered'})
        }
        const user = new User({name, password, email})
        await user.save()
        res.send({ error: 'No', value:'Data Saved'})
    } catch (err) {
        console.error({ 'register': err.toString() })
        res.send({ error: 'Yes', value: err.toString() })
    }
})

module.exports = router