const { default: axios } = require("axios");

const criarWebHook = (data) => {
    return axios({
        method: "post",
        url: "https://api.stage.cora.com.br/endpoints",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Brearer`
        },
        data
    });
}

module.exports = criarWebHook;