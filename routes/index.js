

const express = require("express")
const router = express.Router()


const {index,verMedicamento,crearMedicamento } = require("../controller/indexController")
const { check } = require("express-validator")


// Metod GET
router.get('/', index)

router.get('/ver',verMedicamento )


//Metodo POST
router.post('/crear', [
    check("nombreComercial").not().isEmpty().withMessage("El campo Nombre Comercial es requerido").isLength({ min: 2, max: 10 }).withMessage("El campo debe tener mas de 2 letras y menos de 10"),
    check("nombreGenerico").not().isEmpty().withMessage("El campo Npmbre Genérico es requerido"),
    check("cantidadComprimidos").not().isEmpty().withMessage("El campo Cantidad de Comprimidos es requerido"),
    check("laboratorio").not().isEmpty().withMessage("El campo Laboratorio es requerido"),
    check("obraSocial").not().isEmpty().withMessage("El campo Obra Social es requerido"),
], crearMedicamento)




module.exports = router  


