const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

// env
env.config();


// mongoDb
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.vcg4x.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
 {
   useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
).then(() => {
  console.log('Database connected');
});

//api routes
app.use(bodyParser());
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})