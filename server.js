const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const connectDB = require('./database')
const Signup = require('./userSchema');

require('dotenv').config({ path: './public/.env' });
const app = express()
const PORT =  2121



app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

connectDB()


//post request to create an email
app.post('/api/send-email', async (req, res) =>{
    const { firstName, lastName, email } = req.body
    const videoLink = 'videoLink'
    const handoutLink = 'handoutLink'
    console.log(req.body)


    //save user in database
            const newSignup = new Signup({
                firstName,
                lastName,
                email
            })
            try {
                await newSignup.save();
                console.log('User saved to MongoDB');
                // Handle success response
                
            } catch (error) {
                console.error(error);
                // Handle error response
                
            }

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
        const info = await transporter.sendMail(message);
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email. Please try again later.' });
      }
    
    
    

})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });