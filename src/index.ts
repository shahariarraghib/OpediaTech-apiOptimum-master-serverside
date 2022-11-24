import { NextFunction, Request, Response } from "express";
import express = require("express");
import { AppDataSource } from "./data-source";
import apiRouter from "./routes/index.route";
const bodyParser = require("body-parser");
var cors = require('cors')
const PORT = 3890
// const PORT = 3000


AppDataSource.initialize().then(async ()=> {
    console.log("Datasource has been initialized")
}).catch((error => {
    console.log(error)
}))

const app = express()
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

app.use(express.json())

app.use(cors())

app.use('/api', apiRouter)

app.get('/', (req, res) => {
    res.send('Bonjour')
});

app.use('/assets', express.static("assets"));  // To serve company pictures for example you must go to http://localhost:3000/assets/pictures/picture-1664977792433-393490530.jpg

app.listen(PORT, () => {
    console.log("Node server has started")
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({
        success: false,
        name: error.message
    })
})
