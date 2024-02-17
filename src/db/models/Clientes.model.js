const { Model, Schema } = require("mongoose");

const ClientesModel = new Model("clientes", new Schema({}));

module.exports = ClientesModel;