if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const projectRouter = require('./routes/projects')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)
app.use('/projects', projectRouter)

app.listen(process.env.PORT || 3000)
//
//npm run devStart
//mongo atlas - user:j2xYfEBP3wbpwBzP
//https://cloud.mongodb.com/user?n=%2Fv2%2F5d58959b79358e5e5117fe66&nextHash=%23clusters%2Fedit#/atlas/login
//https://dashboard.heroku.com/apps/visionmx/settings


// // serve static files
// app.use(expressLayouts)
// app.use(express.static('public'));
//
//
// // template engine
// app.set('views',__dirname + '/views');
// app.set('view enigne', 'ejs');
// app.set('layout', 'layouts/layout')
//
// // serve the idnex page
// app.get('/', indexRouter)
//
// // setting up the server
// // app.listen(3000,()=>{
// //     console.log('Server is running on port 3000...');;
// // });
//
// app.listen(process.env.PORT || 3000)
