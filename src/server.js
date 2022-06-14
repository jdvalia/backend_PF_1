import express, { json, urlencoded } from 'express'
import DefaultRoutes from "./routes/default.js"
import CarritosRoutes from './routes/carritos.js'
import ProductosRoutes from './routes/productos.js';

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/carrito', CarritosRoutes)
app.use('/producto', ProductosRoutes)

app.use('/*', DefaultRoutes)

export default app

