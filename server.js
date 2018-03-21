const express = require('express')
const app = express()
const port = process.env.PORT || 8000

const path = require('path')

const history = require('connect-history-api-fallback')
const serveStatic = require('serve-static')

app.use(history())
app.use(serveStatic(path.resolve(__dirname, 'dist')))
app.listen(port, () => console.log('i\'m combat ready!', '\nport:', port))
