import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import mysql from "mysql2";


const app = express();
const port = 8800;

const __filename = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__filename,"/public")));
app.use(bodyParser.urlencoded({ extended: true }));


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1121',
    database: 'UserRegistration'
})

db.connect(err=>{
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
     
      console.log('connected ');
});


app.get("/",(req,res)=>{
    res.sendFile("/index.html");
})

app.get("/register",(req,res)=>{
    res.sendFile(__filename+"public/register.html");
    res.status(200);
})

app.get("/registered",(req,res)=>{
    res.sendFile(__filename+"/public/registered.html")
})



app.post("/register", (req, res) => {
    const { email, username, password } = req.body;

    const sql = "INSERT INTO User(email, password, username) VALUES (?, ?, ?)";
    db.query(sql, [email, password, username], (err, result) => {
        if (err) {
            console.log("Error in sending to database:", err);
            res.status(400).send("Database insertion failed");
        } else {
            res.redirect("/registered")
        }
    });    
});



app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})
