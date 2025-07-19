import express from 'express';
import foodspotRoute  from './modules/foodspot/routes/foodspot.routes'
import userRoute from './modules/user/routes/user.route'
import reviewRoute from './modules/review/routes/review.routes'


const app = express()
app.use(express.json())



app.use('/api/foodspots',foodspotRoute)
app.use('/api/users',userRoute)
app.use('/api/reviews',reviewRoute)



const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`🚀Running on PORT: ${PORT}`)
})
