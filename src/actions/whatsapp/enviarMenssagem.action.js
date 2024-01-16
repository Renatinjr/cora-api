const enviarMenssagemWhatsapp = (data) => {
    const { LAIS_TOKEN_DEV, SESSION } = process.env;
    return axios({
        method: "post",
        url: `https://api.lais.app/api/v1/chats/canais/enviar-mensagem?canal=whatsapp&sessao=${SESSION}`,
        headers: {
            Authorization: `Bearer ${LAIS_TOKEN_DEV}`
        },
        data
    });
}

const enviarArquivoWhatsapp = (data) => {
    const { LAIS_TOKEN_DEV, SESSION } = process.env;
    return axios({
        method: "post",
        url: `https://api.lais.app/api/v1/chats/canais/enviar-arquivo-base64?canal=whatsapp&sessao=${SESSION}`,
        headers: {
            Authorization: `Bearer ${LAIS_TOKEN_DEV}`
        },
        data
    });
}

module.exports = {
    enviarMenssagemWhatsapp,
    enviarArquivoWhatsapp
}