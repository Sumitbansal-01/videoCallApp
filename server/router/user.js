const express = require("express")
const router = express.Router()
const User = require("../models/userSchema")
const bcrypt = require("bcrypt")

router.post("/register", async (req, res) => {
    try {
        const { name, password, email } = req.body
        if (!name || !password || !email) {
            return res.status(422).send({ error: 'No', value: 'Some field are missing' })
        }
        if (await User.findOne({ email })) {
            return res.status(422).send({ error: 'No', value: 'This email is already registered' })
        }
        const user = new User({ name, password, email })
        await user.save()
        res.send({ error: 'No', value: 'Data Saved' })
    } catch (err) {
        console.error({ 'register': err.toString() })
        res.status(501).send({ error: 'Yes', value: err.toString() })
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(422).send({ error: 'No', value: 'Some field are missing' })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(422).send({ error: 'No', value: "Invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(422).send({ error: 'No', value: "Invalid credentials" })
        } else {
            return res.send({ error: 'No', value: "Login Successfully" })
        }
    } catch (err) {
        console.error({ 'login': err.toString() })
        res.status(501).send({ error: 'Yes', value: err.toString() })
    }
})

module.exports = router