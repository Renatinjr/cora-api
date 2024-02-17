const ContatoModel = require("../../db/models/contato.model");
const { enviarMenssagemWhatsapp, enviarArquivoWhatsapp } = require("../../actions/whatsapp/enviarMenssagem.action");
const { retornaBase64Pdf } = require("../../utils/payments/boleto.util");


async function notifica_vencimento(cpf, boleto_link) {
    try {
        const [[contato], base64Pdf] = await Promise.all([
            ContatoModel.find({ "info.cpf": cpf }).sort({ data_criacao: -1, data_modificacao: -1 }).toArray(),
            retornaBase64Pdf(boleto_link)
        ]);

        if (!contato || !base64Pdf) {
            console.error("Erro em contato ou pdf base64", contato, base64Pdf);
        }
        const texto = {
            phone: contato.telefone,
            message: "Segue pdf:"
        }
        const pdf = {
            phone: contato.telefone,
            isGroup: false,
            base64: data_base64
        }
        await enviarMenssagemWhatsapp(texto);
        await enviarArquivoWhatsapp(pdf);
    } catch (error) {
        console.error("Erro ao notificar vencimento:-> ", error);
    }
}


async function gatilhos(event_trigger, ...data) {
    switch (event_trigger) {
        case "invoice.paid": console.log("Transação paga");
            break;
        case "invoice.overdue": notifica_vencimento(data.cpf, data.link);
            break;
        case "invoice.canceled": console.log("Transação cancelada");
            break;
        case "invoice.created": console.log("Transação criada");
            break;
    }
}

module.exports = {
    notifica_vencimento,
    gatilhos
}