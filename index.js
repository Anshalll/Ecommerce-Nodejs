import express from 'express'
export const app = express()
import dotenv from 'dotenv'
import { Router , Admin_Router} from './Routes/index.js'
import path from 'path'
import cookieParser from 'cookie-parser'
import { Db_connection } from './utils/database.js'
import bodyparser from 'body-parser'

dotenv.config({
    path: '.env'
})


Db_connection()

app.use(express.urlencoded({ extended: true }))

app.use(bodyparser.json())
app.use(express.static(path.resolve() +  '/public'))
app.use('/uploads', express.static(path.resolve()+ '/uploads'));



app.set('view engine' , "ejs")
app.use(cookieParser())
app.use("/" , Router)
app.use('/admin' , Admin_Router)



app.use((req, res, next) => { 
    res.status(404).send( 
        "<h1>Page not found on the server</h1>") 
}) 


app.listen(process.env.PORT , ()=>{
    console.log(`Server started on port ${process.env.PORT}`)
})