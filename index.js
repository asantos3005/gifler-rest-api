const express = require('express')
const app = express()
const homeRoutes = require('./routes/movies'); 

const port = 3000


// An example of router
app.use('/', homeRoutes); 
app.use('/gif', gifRoutes); 
app.use('/collection', collectionRoutes); 
app.use('/auth', authRoutes); 



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
