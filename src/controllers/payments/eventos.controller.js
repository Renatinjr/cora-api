const consultaBoletoById = require("../../actions/cora-actions/boletos/consultaBoletoById.action");
const { gatilhos } = require("../../helpers/payments/eventos.helper");

function pagamentosWebHook(req, res) {

    try {
        const campos = ["webhook-event-id", "webhook-event-type", "webhook-resource-id"];
        if (campos.map((c) => c in req.headers).length === 0) {
            console.error("Campos nescessarios de hearders não informados!");
            return res.sendStatus(400);
        }
        const {
            "user-agent": agent,
            "webhook-event-id": event_id,
            "webhook-event-type": event_type,
            "webhook-resource-id": recurso_id
        } = req.headers;
        console.log("Headers", agent, event_id, event_type, recurso_id);

        const { data } = consultaBoletoById(event_id);
        gatilhos(event_type);
        return res.sendStatus(200);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false });
    }
}

module.exports = pagamentosWebHook;