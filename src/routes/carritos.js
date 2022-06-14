import { Router } from 'express'
import * as carritosController from '../controller/CarritosController.js'


const CarritosRoutes = new Router();

CarritosRoutes.get('/', carritosController.obtenerCarritos)

CarritosRoutes.get('/:idCarrito/productos', carritosController.obtenerProductosDelCarrito)

CarritosRoutes.post('/', carritosController.crearCarrito)

CarritosRoutes.post('/:idCarrito/productos', carritosController.agregarProductoAlCarrito)

CarritosRoutes.delete('/:idCarrito/producto/:codigoProducto', carritosController.borrarProductoAlCarrito)

CarritosRoutes.delete('/:idCarrito', carritosController.borrarCarrito)

export default CarritosRoutes 