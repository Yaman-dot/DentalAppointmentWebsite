import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import sequelize from './config/mysql.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
// app config
const app = express()
const port = process.env.PORT || 4000
sequelize.authenticate()
  .then(() => {
    console.log('Database Connected');
  })
  .catch((error) => console.error('Database connection failed:', error));

connectCloudinary()

// middlewares
app.use(cors())
app.use(express.json())

// api endpoints
app.use('/api/admin', adminRouter)
// localhost:4000/api/admin/add-doctor

app.get('/', (req, res) => {res.send('API WORKING')})
app.listen(port, () => console.log(`Server Started | running on port ${port}`))