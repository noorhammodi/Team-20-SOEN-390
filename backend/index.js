const express = require("express")
const app = express()

// Needed for CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
const cors = require('cors')
app.use(cors())

app.get("/", (req, res) => {
	res.send("<h2>Hello World<h2>")
})

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`listening on port ${port}`))
