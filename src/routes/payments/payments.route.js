const pagamentosWebHook = require("../../controllers/payments/eventos.controller");
const prefix = "/payments";

module.exports = (router) => {
    router.post(`${prefix}/eventos`, pagamentosWebHook);
}