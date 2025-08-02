const express = require('express')
const cors = require('cors');

const gifRoutes = require('./routes/gifRoutes')
const app = express()
const port = 3000

app.use(cors())


// Router
app.use('/gif', gifRoutes); 
//app.use('/collection', collectionRoutes); 
//app.use('/auth', authRoutes); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
