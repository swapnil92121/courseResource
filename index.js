const express = require('express')
const app = express()
const cors=require('cors')
require('dotenv').config()
const { dataBaseConnectivity } = require('./database/dataBaseConnectivity')
const fileUpload = require('express-fileupload')
const {userAuthorization}=require('./middleware/authorization')


//middlewear
app.use(cors())
app.use(express.json())
app.use(fileUpload())

//user userAuthentication apis
app.use('/course/user-authentication/api',require('./router/userAuthentication/userAuthentication'))
//Course apis
app.use('/course-programs/api',userAuthorization,require('./router/coursePrograms/coursePrograms'))



const start = async () => {
    try {
        await dataBaseConnectivity(process.env.MONGODB_CONNECTIVITY)
        app.listen(process.env.PORT || 4000, () => {
            console.log('connect...')
        })
    } catch {
        console.log('not connect')
    }
}

start()