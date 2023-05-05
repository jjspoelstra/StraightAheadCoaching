const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

require('dotenv').config({ path: './public/.env' });
const app = express()
const PORT =  2121



app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))




//post request to create an email
app.post('/api/send-email', async (req, res) =>{
    const { firstName, lastName, email } = req.body
    const videoLink = 'videoLink'
    const handoutLink = 'handoutLink'
    console.log(req.body)

    //logging into email
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'jjspoels@gmail.com',
            pass: process.env.EMAIL
        }
    })

    //formatting the message
    const message = {
        from: 'jjspoels@gmail.com',
        to: email,
        subject: `Thanks for signing up!`,
        text: `Hi ${firstName}! Thanks for signing up. 
        Here is the video: ${videoLink}
        And the handout: ${handoutLink}`
    }

    try {
        //sending the email
        const info = await transporter.sendMail(message)
        console.log('Email send:', info.response)
        res.status(200).json({ message: 'Email send' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error sending email' });
      }
    
    
    

})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });