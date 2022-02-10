const express = require("express");
const { status } = require("express/lib/response");
const router = express.Router();
const app = new express();
const arrCarritos = [];
let idc = 1;

const productos = require("./productos.js");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/productos",productos);

router.post("/",(req,res)=>{
  if(req.body.idc !== undefined && req.body.id !== undefined && req.body.nombre !== undefined && req.body.precio !== undefined && req.body.cantidad !== undefined){
      let agrego = req.body;
      arrCarritos.push(agrego);
      res.send(agrego);
 }
  else{
     res.send({error:"Revisar los datos"});
 }
});


//GET devuelve todos los productos dentro del carrito.
router.get("/",(req, res)=>{
  res.send(arrCarritos);
});


//GET ruta con /:id devuelve el producto con el ID seleccionado en la ruta.
router.get("/:idc/productos",(req, res, next)=>{
    let idCarrito = parseInt(req.params.idc); //es el :id de la ruta
    if ( !isNaN(idCarrito) ){ //verifico que el :id ingresado sea un numero
                      let carrito = arrCarritos.find(arrCarritos => arrCarritos.idc === idCarrito); //busco dentro del array el ID ingresado
        if(carrito !== undefined) {  //verifico que el :id ingresado exista dentro del array
                        res.send(carrito);
        }else {
               res.send('El id ingresado todavía no existe');
        }
    }else{
      res.send('El id ingresado no es numerico');
    } 
    next();   
});


router.delete('/:idc', (req, res, next) =>{
   let idCarritodel = parseInt(req.params.idc);
   idCarrito = idCarritodel - 1; //Acomodo el ID ingresado para que pueda manejarlo con loas presentaciones y con el splice
    if ( !isNaN(idCarrito) ){
       let carritodel = arrCarritos.find(arrCarritos => arrCarritos.idc === idCarritodel);
 
       if(carritodel !== undefined) {
                       res.send(carritodel);
                       arrCarritos.splice(idCarrito,1);
       }else {
              res.send('El id ingresado todavía no existe del delete');
       }
     }else{
      res.send('El id ingresado no es numerico Respuesta desde el DELETE');
     } 
    next();  

 });

module.exports = router;