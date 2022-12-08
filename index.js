const express = require('express');
const cors = require('cors');
const employees = require('./routes/timesheetdatas');
// const services = require('./routes/api/services');
const db = require('./database');
const app = express();

const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());
app.use('/api/timesheetdatas', employees);
// app.use('/api/services', services); 


app.get('/getLogin', (req, res) => {
    db.all("SELECT * FROM Employees", (err, rows) => {
        if (err) {
            return res.status(400).send(err);
        }
        res.json(rows);
    })
})

module.exports = app.listen(port, () => console.log(`Server started on port ${port}`));
