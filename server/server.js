const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors(), express.json());

const connectDb = require('./config/mongoose.config');
connectDb();

const productRouter = require('./routes/product.routes');
app.use('/api', productRouter);

const port = process.env.PORT || 8000;   
app.listen(port, () => console.log(`Listening on port: ${port}`) );
