const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   const helmet = require('helmet');
   const rateLimit = require('express-rate-limit');
   const userRoutes = require('./routes/user');
   require('dotenv').config();

   const app = express();

   // Middleware
   app.use(cors());
   app.use(express.json());
   app.use(helmet()); // Security headers
   app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })); // Rate limiting

   // Routes
   app.use('/api/users', userRoutes);

   // MongoDB Connection
   mongoose.connect(process.env.MONGODB_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   })
     .then(() => console.log('MongoDB connected'))
     .catch(err => console.error('MongoDB connection error:', err));

   // Start Server
   const PORT = process.env.PORT || 5000;
   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));