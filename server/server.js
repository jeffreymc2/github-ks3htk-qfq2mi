// import express from 'express'
// import cors from '@types/cors'


// const app = express();
// app.use(cors ({
// origin: "https://api.cloudinary.com/v1_1/jeffreymc/resources/image/tags/brand",
// }))
// app.get("/data", (req, res) => {
//     res.json({name: "jeff"})

// })



// app.listen(3000)

const express = require('express')
const request = require('request')
const cors = require('cors')

const app = express()

const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true)
    },
}
app.options('*', cors(corsOptions))

const PRODUCTION_URL = 'https://githubks3htkqfq2mi-qo4x--3000.local-credentialless.webcontainer.io'
const STAGING_URL = 'https://githubks3htkqfq2mi-qo4x--3000.local-credentialless.webcontainer.io'
const TEST_URL = 'https://githubks3htkqfq2mi-qo4x--3000.local-credentialless.webcontainer.io'

const environment = process.env.NODE_ENVIRONMENT ? process.env.NODE_ENVIRONMENT : "production"


const url = environment === "production" ? PRODUCTION_URL : environment === "staging" ? STAGING_URL : TEST_URL

app.use('/', cors(corsOptions), (req, res) => {
    const request_url = `${url}${req.url}`

    req.pipe(request(request_url)).pipe(res)
});

app.listen(3100)
