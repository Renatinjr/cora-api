const { Router } = require("express");
const paymentsRoute = require("./payments/payments.route");
const router = Router();

module.exports = () => {
    paymentsRoute(router);
    return router;
}