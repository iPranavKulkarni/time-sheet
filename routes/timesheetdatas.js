const express = require('express');
const router = express.Router();
const db = require('../database');

router.get("/getEmployees/", (req, res) => {
    db.all(
        "SELECT * FROM Employees",
        (err, result) => {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(200).send(result);
        }
    );
})
router.get("/getProjects/", (req, res) => {
    db.all(
        "SELECT * FROM Projects",
        (err, result) => {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(200).send(result);
        }
    );
})
router.get("/getHours/", (req, res) => {
    db.all(
        "SELECT * FROM Hours",
        (err, result) => {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(200).send(result);
        }
    );
})
router.get("/getDescriptions/", (req, res) => {
    db.all(
        "SELECT * FROM Descriptions",
        (err, result) => {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(200).send(result);
        }
    );
})
router.get("/getAllData/", (req, res) => {
    db.all(
        "SELECT * FROM AllTimeSheetData",
        (err, result) => {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(200).send(result);
        }
    );
})
router.post("/addAllData", (req, res) => {

    let reqBody = req.body;
    const errorObject = 0;//Todo!!!!
    if (errorObject == 0) {
        const { Name, Date, Project, Time, Task, Comment } = reqBody;
        db.run(
            `INSERT INTO AllTimeSheetData \
            (Name, Date, Project, Time, Task, Comment) \
            VALUES (?,?,?,?,?,?)`,
            [Name, Date, Project, Time, Task, Comment],
            (err, result) => {
                if (err) {
                    res.status(400).json({ "error": err.message })
                    return;
                }
                res.status(201).send(reqBody);
            }
        );
    }
    else {
        res.status(400).send(errorObject);
    }
})
module.exports = router;