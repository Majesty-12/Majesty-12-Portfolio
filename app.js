const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 8000;


app.use('/static', express.static('static')) // For serving static files
express.urlencoded({extended: true})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 



// ENDPOINTS
app.get('/', (req, res)=>{
    res.status(200).render('index.pug');
})











// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
