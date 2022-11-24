
const {Pharm} = require("../models/medicamentos")
const { validationResult } = require("express-validator")

const index = (req, res) => {
    res.status(200).send('Bienvenidos a la farmacia del barrio')
}


const crearMedicamento = async (req, res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            const item = new Pharm(req.body)
            await item.save()
            res.status(201).json({ item })
        } else {
            res.status(501).json({ err })
        }

    } catch (error) {
        res.status(501).json({ error })
    }
}



const verMedicamento = async (req, res) => {

    const items = await Pharm.find()
    res.status(200).json({ items })
}




module.exports = {index,verMedicamento,crearMedicamento}