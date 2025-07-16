import express from 'express';
import foodspotRoute  from './modules/foodspot/routes/foodspot.routes.js'

const app = express()
app.use(express.json())

app.use('/api/foodspot',foodspotRoute)

const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`🚀Running on PORT: ${PORT}`)
})
