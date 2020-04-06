const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

var aylien = require('aylien_textapi'); 

/* Middleware*/
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });
  

//use midldleware, cors and express
app.use(express.static('dist'))
app.use(bodyParser.json());
app.use(cors());
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})

app.post('/api', async (req, res) => {
    const { formText } = req.body;
    console.log(formText);
    
    try {
        console.log("Sending request");
        textapi.sentiment({'text': formText }, 
          function(error, response) {
          if (error === null) {
            console.log(response);
            res.send(response);
        }
      });
      
    } catch(error) {
      console.log(error);
    }
  })
