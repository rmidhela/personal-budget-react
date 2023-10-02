/*const express = require('express');
const app = express();
const port = process.env.PORT||3000;
const fs = require('fs');
const cors = require('cors');

// app.use ('/', express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
     res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    fs.readFile('data.json','utf8',(err,data) => {
        if(err) {
            console.error(err);
            return res.status(500).send('Error reading budget data');
        }
        const budget = JSON.parse(data);
        res.json(budget);
    });
});

app.listen(port, () => {
console.log(`Server is running on  port ${port}`)
});
*/


const express = require('express');
const app = express();
const port = process.env.PORT||4200;
const fs = require('fs');
const cors = require('cors');

//app.use ('/', express.static('public'));
app.use(cors());


// app.get('/hello', (req, res) => {
//     res.send('Hello World!');
// });

app.get('/', (req, res) => {
    res.send('Welcome to the Budget API'); // Replace with a suitable message
  });

app.get('/budget', (req, res) => {
    fs.readFile('data.json','utf8',(err,data) => {
        if(err) {
            console.error(err);
            return res.status(500).send('Error reading budget data');
        }
        const budget = JSON.parse(data);
        res.json(budget);
    });
});

app.listen(port, () => {
console.log(`Server is running on  port ${port}`)
});