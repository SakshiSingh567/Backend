const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); // Ensure productRoutes is only imported once as well
const connectDB = require('./config/db');
const connection = require('./config/db');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny')); 
app.use(express.json());



// Use routes
// app.use('/',(req,res)=>{
//   res.send("API is working")
// })
app.use('/api', userRoutes);
app.use('/api/products', productRoutes);

// Handling undefined routes
app.use((req, res, next) => {
  res.status(404).send("Sorry, this route doesn't exist.");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, async()=>{
  try{
   await connection;
   console.log("Connected with mongoDB");
   console.log(`Server is connected on ${PORT}`);
  }
catch(err){
  console.log("error while connecting",err);
}
})