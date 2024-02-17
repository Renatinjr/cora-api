const { default: mongoose } = require("mongoose");
const ClientesModel = require("../../db/models/Clientes.model");

async function enviaBoletos(req, res) {
    try {
        const { clientId, cpf, numero } = req.body;
        const campos_cliente = `sessao token`;
        const cliente = await ClientesModel.find({ _id: mongoose.Types.ObjectId(clientId) }, campos_cliente);

    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    enviaBoletos
}