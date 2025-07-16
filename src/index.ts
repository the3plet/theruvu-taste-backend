import express from 'express';
import foodspotRoute  from './modules/foodspot/routes/foodspot.routes.js'
import userRoute from './modules/user/routes/user.route.js'

const app = express()
app.use(express.json())

app.use('/api/foodspots',foodspotRoute)
app.use('/api/users',userRoute)

const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`🚀Running on PORT: ${PORT}`)
})
