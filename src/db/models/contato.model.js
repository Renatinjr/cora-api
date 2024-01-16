const { Model, Schema } = require("mongoose");

const ContatoModel = new Model(new Schema({
    _id: Schema.ObjectId,
    nome: String,
    telefone: String,
    info: {
        email: String,
        cpf: String,
        dataNascimento: String,
        endereco: {
            cep: String,
            rua: String,
            bairro: String,
            cidade: String,
            estado: String
        }
    },
    cliente_id: Schema.ObjectId,
    data_criacao: new Date(),
    data_modificacao: new Date(),
    criado_por: Schema.ObjectId,
    descontinuado: Boolean,
    contatos: Array,
}));

module.exports = ContatoModel;