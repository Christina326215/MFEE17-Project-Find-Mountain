const express = require('express')
var Mailgun = require('mailgun-js')
//init express
var app = express()

//Your api key, from Mailgun’s Control Panel
let forgotToken = Math.floor(Math.random() * 999999)

//Your domain, from the Mailgun Control Panel
var domain = 'http://localhost:3000'

//Your sending email address
var from_who = 'j412988921241@gmail.com'

//Tell express to fetch files from the /js directory
app.use(express.static(__dirname + '/js'))
//We're using the Jade templating language because it's fast and neat
app.set('view engine', 'jade')
//Do something when you're landing on the first page
app.get('/', function (req, res) {
    //render the index.jade file - input forms for humans
    res.render('index', function (err, html) {
        if (err) {
            // log any error to the console for debug
            console.log(err)
        } else {
            //no error, so send the html to the browser
            res.send(html)
        }
    })
})
// Send a message to the specified email address when you navigate to /submit/someaddr@email.com
// The index redirects here
app.get('/submit/:mail', function (req, res) {
    //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
    let mailgun = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN })
    // var mailgun = new Mailgun({ apiKey: api_key, domain: domain })
    var data = {
        //Specify email data
        from: from_who,
        //The email to contact
        to: req.params.mail,
        //Subject and text data
        subject: 'Hello ',
        html:
            'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http://localhost:3000/' +
            req.params.mail +
            '">Click here to add your email address to a mailing list</a>',
    }
    //Invokes the method to send emails given the above data with the helper library
    mailgun.messages().send(data, function (err, body) {
        //If there is an error, render the error page
        if (err) {
            res.render('error', { error: err })
            console.log('got an error: ', err)
        }
        //Else we can greet    and leave
        else {
            //Here "submitted.jade" is the view file for this landing page
            //We pass the variable "email" from the url parameter in an object rendered by Jade
            res.render('submitted', { email: req.params.mail })
            console.log(body)
        }
    })
})

module.exports = router
