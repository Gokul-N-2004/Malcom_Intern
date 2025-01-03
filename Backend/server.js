var express = require("express")
var bodyParser = require("body-parser")
var mysql = require('mysql2')
var nodeMailer = require("nodemailer")

const app= express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Srsrprlvr@79',
  database: 'applications',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

app.post("/add", (req, res) => {
  const query = 'INSERT INTO applicants (Name, MailID, DOB, KnownSkills, MobileNo) VALUES (?, ?, ?, ?, ?)';
  const { name, mail_id, dob, known_skills, mobile_no } = req.body;

  // Log the request body for debugging
  console.log("Request body:", req.body);

  // Validate the input to ensure data is not empty
  if (!name || !mail_id || !dob || !known_skills || !mobile_no) {
    console.log("Validation failed: Missing fields");
    return res.status(400).send("Fill all the fields.");
  }

  // Execute the query with proper bindings
  connection.query(query, [name, mail_id, dob, known_skills, mobile_no], (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("An error occurred while saving your data.");
      return; // Exit the handler to ensure email logic is not executed
    } else {
      res.send("Thank you for submitting your application!!");
      console.log('Data inserted:', results);
      sendEmail(name, mail_id, dob, known_skills, mobile_no); // Only executed on success
    }    
  });

  // Email logic extracted into a separate function
  function sendEmail(name, mail_id, dob, known_skills, mobile_no) {
    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: 'dummy00241@gmail.com',
        pass: 'lbct qwnf bpte fhnc',
      },
    });

    const mailOptions = {
      from: 'dummy00241@gmail.com',
      to: 'srshankar79@gmail.com',
      subject: 'New Application received!!',
      text: `A new application has been submitted:\nName: ${name}\nMailID: ${mail_id}\nDOB: ${dob}\nKnown Skills: ${known_skills}\nMobile No: ${mobile_no}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email sending failed:", error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }
});


app.get("/",(req,res) =>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(5000)

console.log("Listening on port 5000")