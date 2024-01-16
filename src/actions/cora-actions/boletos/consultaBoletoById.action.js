const { default: axios } = require("axios");

const consultaBoletoById = (uuid) => {
    return axios({
        method: "get",
        url: `https://api.stage.cora.com.br/endpoints/${uuid}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Brearer`
        },
    });
}

module.exports = consultaBoletoById;