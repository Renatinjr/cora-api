const { enviarMenssagemWhatsapp, enviarArquivoWhatsapp } = require("../../actions/whatsapp/enviarMenssagem.action");
const ContatoModel = require("../../db/models/contato.model");

async function notifica_vencimento(cpf, data_base64) {
    try {
        const [contato] = await ContatoModel.find({ "info.cpf": cpf })
            .sort({ data_criacao: -1, data_modificacao: -1 }).toArray();

        if (!contato) return;
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
        console.error(error);
    }
}

module.exports = {
    notifica_vencimento
}