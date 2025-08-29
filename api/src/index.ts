import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productsRouter from './products.router';
import connectDB from './database/db';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

connectDB();

app.use(express.json());
app.use(cors());
app.get('/', ( req, res ) => {
    res.json({
        ok: true,
        message: 'MINI-MARKET - API 👋'
    });
});
app.use('/api/products', productsRouter);
app.listen(port, () => console.log(`Servidor corriendo en el puerto 🏃‍♂️${port} ...`) )