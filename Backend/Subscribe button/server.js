var express = require("express")
var bodyParser = require("body-parser")
var mysql = require('mysql2');

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

  app.post("/add", (req, res) => {
    const query = 'INSERT INTO subscribers (Name, MailID) VALUES (?, ?)';
    const name = req.body.name;
    const mail_id = req.body.mail_id;

    // Log the request body for debugging
    console.log("Request body:", req.body);

    // Validate the input to ensure data is not empty
    if (!name || !mail_id) {
        return res.status(400).send("Name and Mail ID are required.");
    }

    // Execute the query with proper bindings
    connection.query(query, [name, mail_id], (err, results) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).send("An error occurred while saving your data.");
        }
        console.log('Data inserted:', results);
        res.send("Thank you for subscribing to our newsletter!!");
    });
});


app.get("/",(req,res) =>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(8800)

console.log("Listening on port 8800")