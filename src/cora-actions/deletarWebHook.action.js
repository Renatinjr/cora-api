const { default: axios } = require("axios");
const deletarWebHook = (uuid) => {
    return axios({
        method: "delete",
        url: `https://api.stage.cora.com.br/endpoints/${uuid}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Brearer "
        },
    });
}

module.exports = deletarWebHook;