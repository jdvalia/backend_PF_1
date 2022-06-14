import { Router } from 'express'
import * as productosController from '../controller/ProductosController.js'


const ProductosRoutes = new Router();

ProductosRoutes.get('/', productosController.obtenerProductos)

ProductosRoutes.get('/:codigoProducto', productosController.obtenerUnProducto)

ProductosRoutes.post('/', productosController.agregarProducto)

ProductosRoutes.put('/:codigoProducto', productosController.actualizarProducto)

ProductosRoutes.delete('/:codigoProducto', productosController.borrarProducto)


export default ProductosRoutes 