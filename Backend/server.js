var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var nodeMailer = require("nodemailer")

const app= express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb+srv://shankarsr:mAlCoM@malcomsamplecluster.nwava.mongodb.net/?retryWrites=true&w=majority&appName=MalcomSampleCluster')
var db = mongoose.connection
db.on('error', ()=> console.log("Error in connecting to the Database"))
db.once('open', () => console.log("Connected to Database"))

app.post("/add", (req, res) =>{
    var name = req.body.name
    var mail_id= req.body.mail_id
    var dob = req.body.dob
    var known_skills = req.body.known_skills
    var mobile_no = req.body.mobile_no

    var data={
        "Name": name,
        "MailID" : mail_id,
        "DOB": dob,
        "KnownSkills": known_skills,
        "MobileNo": mobile_no
    }
    db.collection('apps').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully")
    })
    var transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      secure: true, 
      secureConnection: false,
      tls: {
         ciphers: "SSLv3",
      },
      requireTLS: true,
      port: 465,
      debug: true,
      connectionTimeout: 10000,
      auth: {
          user: 'dummy00241@gmail.com',
          pass: 'lbct qwnf bpte fhnc'
      }
    });
      
      var mailOptions = {
        from: 'dummy00241@gmail.com',
        to: 'srshankar79@gmail.com',
        subject: 'New Application received!!',
        text: `A new application has been submitted:\nName: ${name}\nMailID: ${mail_id}\nDOB: ${dob}\nKnown Skills: ${known_skills}\nMobile No: ${mobile_no}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          return true;
        } else {
          console.log('Email sent: ' + info.response);
          return false;
        }
      });
      res.send("Your response has been recorded!!")
})

app.get("/",(req,res) =>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(5000)

console.log("Listening on port 5000")