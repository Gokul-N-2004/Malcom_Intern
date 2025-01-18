var express = require("express")
var bodyParser = require("body-parser")
var mysql = require('mysql2');
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
    database: 'newsletter',
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL!');
  });
  app.post("/send", async (req, res) => {
    const heading = req.body.heading;
    const content = req.body.content;

    try {
        const query = 'SELECT MailID FROM subscribers';
        connection.query(query, async (err, results) => {
            if (err) {
                console.error("Error fetching subscribers:", err);
                return res.status(500).send("Error fetching subscribers from the database");
            }

            const emailList = results.map(subscriber => subscriber.MailID);

            if (emailList.length === 0) {
                return res.status(400).send("No subscribers found");
            }

            const transporter = nodeMailer.createTransport({
                host: "smtp.gmail.com",
                secure: true,
                port: 465,
                auth: {
                    user: 'dummy00241@gmail.com',
                    pass: 'lbct qwnf bpte fhnc' // Gmail app password
                }
            });

            // Send emails one by one
            for (const email of emailList) {
                const mailOptions = {
                    from: 'dummy00241@gmail.com',
                    to: email, // Send to one recipient at a time
                    subject: 'Newsletter Alert!!',
                    text: `${heading}\n\n${content}`
                };

                try {
                    const info = await transporter.sendMail(mailOptions);
                    console.log(`Email sent to ${email}: ${info.response}`);
                } catch (error) {
                    console.error(`Error sending email to ${email}:`, error);
                }
            }

            res.send("Your response has been recorded and emails sent!");
        });
    } catch (err) {
        console.error("Error processing request:", err);
        res.status(500).send("An error occurred while processing your request");
    }
});




app.get("/",(req,res) =>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('emails.html')
}).listen(5000)

console.log("Listening on port 5000")