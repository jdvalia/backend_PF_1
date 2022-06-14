import CarritosApi from '../api/CarritosApi.js'

const carritos = new CarritosApi();

export async function obtenerCarritos(req, res) {
    try {
        const carritosList = await carritos.getCarritos()
        res.status(200).json(carritosList)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}

export async function obtenerProductosDelCarrito(req, res) {
    try {
        let idCarrito = req.params.idCarrito;
        let idUsuario = "jorgevalia2002@gmail.com";
        const carrito = await carritos.getProductosDelCarrito(idCarrito)
        res.status(200).json(carrito)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}

export async function crearCarrito(req, res) {
    try {
        let objeto = req.body;
        const carrito = await carritos.addCarrito(objeto)
        res.status(200).json(carrito)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}

export async function agregarProductoAlCarrito(req, res) {
    let idCarrito = req.params.idCarrito;
    let objNuevoProducto = req.body;
    try {
        const carrito = await carritos.addProductoAlCarrito(idCarrito, objNuevoProducto)
        res.status(200).json(carrito)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}

export async function borrarProductoAlCarrito(req, res) {
    let idCarrito = req.params.idCarrito;
    let codigoProducto = req.params.codigoProducto;
    try {
        const carrito = await carritos.deleteProductoAlCarrito(idCarrito, codigoProducto)
        res.status(200).json(carrito)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}

export async function borrarCarrito(req, res) {
    try {
        let idCarrito = req.params.idCarrito;
        const carrito = await carritos.deleteCarrito(idCarrito)
        res.status(200).json(carrito)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}
