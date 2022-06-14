import ProductosApi from '../api/ProductosApi.js'

const productos = new ProductosApi();

export async function obtenerProductos(req, res) {
    try {
        const productosList = await productos.getProductos()
        res.status(200).json(productosList)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}

export async function obtenerUnProducto(req, res) {
    try {
        let codigo = req.params.codigoProducto;
        const producto = await productos.getProducto(codigo)
        res.status(200).json(producto)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}

export async function agregarProducto(req, res) {
    try {
        let objeto = req.body;
        const producto = await productos.addProducto(objeto)
        res.status(200).json(producto)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}

export async function actualizarProducto(req, res) {
    try {
        let codigo = req.params.codigoProducto;
        let objeto = req.body;
        const producto = await productos.putProducto(codigo, objeto);
        res.status(200).json(producto);
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}

export async function borrarProducto(req, res) {
    try {
        let codigo = req.params.codigoProducto;
        const producto = await productos.deleteProducto(codigo)
        res.status(200).json(producto)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}